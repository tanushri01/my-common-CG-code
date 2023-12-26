/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import Joi from 'joi';
import { assignIn, find, defaults } from 'lodash';

const defaultOptions = {
  contextRequest: false,
  allowUnknownHeaders: true,
  allowUnknownBody: true,
  allowUnknownQuery: true,
  allowUnknownParams: true,
  allowUnknownCookies: true,
  status: 400,
  statusText: 'Bad Request',
};

// maps the corresponding request object to an `express-validation` option
const unknownMap: any = {
  headers: 'allowUnknownHeaders',
  body: 'allowUnknownBody',
  query: 'allowUnknownQuery',
  params: 'allowUnknownParams',
  cookies: 'allowUnknownCookies',
};

export default function expressValidation(schema: any) {
  if (!schema) throw new Error('Please provide a validation schema');

  return async (req: any, _res: any, next: any) => {
    const errors: any = [];

    // Set default options
    const options = defaults({}, schema.options || {}, {}, defaultOptions);

    // NOTE: mutates `errors`
    const requestInputType = ['headers', 'body', 'query', 'params', 'cookies'];

    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < requestInputType.length; index++) {
      const key = requestInputType[index];
      const allowUnknown = options[unknownMap[key]];
      const entireContext = options.contextRequest ? req : null;
      if (schema[key]) {
        await validate(errors, req[key], schema[key], key, allowUnknown, entireContext);
      }
    }
    if (errors && errors.length === 0) return next();

    // tslint:disable-next-line:new-parens
    return next(new (ValidationError as any)(errors, options));
  };
}

/**
 * validate checks the current `Request` for validations
 * NOTE: mutates `request` in case the object is valid.
 */
async function validate(errObj: any, request: any, schema: any, location: any, allowUnknown: any, context: any) {
  if (!request || !schema) return;

  const joiOptions = {
    context: context || request,
    allowUnknown,
    abortEarly: false,
  };

  const { error, value } = await Joi.object(schema).validate(request, joiOptions);

  const errors = error;
  if (!errors || errors.details.length === 0) {
    assignIn(request, value); // joi responses are parsed into JSON
    return;
  }
  // tslint:disable-next-line:no-shadowed-variable
  errors.details.forEach((error: any) => {
    const errorExists = find(errObj, (item: any) => {
      if (item && item.field === error.path && item.location === location) {
        item.messages.push(error.message);
        item.types.push(error.type);
        return item;
      }
      return;
    });

    if (!errorExists) {
      errObj.push({
        field: error.path,
        location,
        messages: [error.message],
        types: [error.type],
      });
    }
  });
  return errObj;
}

function ValidationError(this: any, errors: any, options: any) {
  this.name = 'ValidationError';
  this.message = 'validation error';
  this.errors = errors;
  this.flatten = options.flatten;
  this.status = options.status;
  this.statusText = options.statusText;
}
