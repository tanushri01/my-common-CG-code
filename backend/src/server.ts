import express, { NextFunction, Request, Response } from 'express';
import next from 'next';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { config } from 'dotenv';
import { loadEnvConfig } from '@next/env';
import { ExpressError } from './commons/helper/errorHandler/ExpressError';
import { dbConnection } from './commons/helper/util';

const ENV_FILE = path.join(__dirname, '.env');
const dev = process.env.NODE_ENV !== 'production';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
config({ path: ENV_FILE });
const nextApp = next({ dev });
const nextAppHandle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;
loadEnvConfig(__dirname, process.env.NODE_ENV !== 'production');

(async () => {
  try {
    dbConnection();
    await nextApp.prepare();
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    /* Routes */
    fs.readdirSync(path.resolve(__dirname, 'routes')).forEach(async (file) => {
      if (file.includes('.js') && !file.includes('.js.')) {
        console.log(file);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { router, basePath } = require(`./routes/${file}`);
        app.use(basePath, router);
      }
    });

    app.all('*', (req: Request, res: Response) => {
      if (req.url.includes('/api/auth')) {
        return nextAppHandle(req, res);
      }
      if (req.url.split('/')[1] === 'api') {
        return res.status(404).send({ message: 'APIs route not found' });
      }
      return nextAppHandle(req, res);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use(function (err: ExpressError, _req: Request, res: Response, _next: NextFunction) {
      return ExpressError.errorHandler(err.status, err.statusText, err.errors, res);
    });

    app.listen(port, (err?: unknown) => {
      if (err) throw err;

      console.log(`> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
