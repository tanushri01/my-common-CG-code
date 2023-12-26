export default {
  VALIDATION_MESSAGE: {
    INTERNAL_SERVER_ERROR: 'Something went wrong',
    USER_NOT_FOUND: 'User not found',
    INVALID_PASSWORD: 'Invalid or missing password ',
    DUPLICATE_EMAIL: 'User already exist with given email',
    INVALID_EMAIL: 'Invalid email id',
    TOKEN_MISSING: 'Token missing from header',
    UNAUTHORIZE: 'You are not authorize to perform access',
    ERROR_WHILE_SENDING_MAIL: 'Something went wrong',
    PASSWORD_CONFIRM_PASSWORD_MISMATCH: 'Password and confirm password not same',
    INVALID_EMAIL_TOKEN: 'Invalid token or email',
    INVALID_USER_ID: 'Invalid user id',
    INVALID_TRANSACTION_ID: 'Invalid transaction id',
    EXCEEDED_LIMIT: 'You have exceeded the maximum allowed number of form submissions.',
  },
  CONTROLLER_MESSAGE: {
    CREATED: 'Created',
    SUCCESS: 'Success',
  },
  SERVICE_MESSAGE: {
    RESETPASSWORD_EMAIL: 'We have sent an email with a password reset link to your email address.',
    SUCCESSFULLY_UPDATED_USER: 'Your account has been updated successfully.',
    UPDATE_TRANSACTION_HISTORY: 'Update transaction history status',
    TRANSACTION_DOES_NOT_EXIST: 'Transaction does not exist with this formId',
    REPORT_SEND: 'Successfully report send on your email.',
  },
  TOKEN_EXPIRY: {
    LOGIN_TOKEN: '3d',
  },

  URL_DOMAIN: 'https://iamprosay.com',
  EMAIL_SUBJECT: 'Send report',
  EMAIL_REPORT_TEXT: `We are pleased to attach report.`,
  EMAIL_REPORT_CAPTION: 'Report.pdf',
  COMPLETE: 'complete',
  INPROGRESS: 'inprogress',
  QUESTION_ID: 1,
};
