
FROM node:16-alpine
WORKDIR /app
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN npm install -g puppeteer@13.2.0

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "sh", "run.sh" ]


