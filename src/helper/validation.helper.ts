import { IValidationResponse } from '@/components';
import {
  THIS_FILED_IS_REQUIRED,
  MUST_BE_IN_VALID_FORMAT,
  PLEASE_ENTER_VALID_URL,
  PLEASE_ENTER_VALID_PHONENUMBER,
  PLEASE_ENTER_VALID_PASSWORD,
  CANNOT_EXCEED_LIMIT,
  PLEASE_ENTER_VALID_ZIP_CODE,
} from '@/constant';
import { RegexLibrary } from '@/library';

/**
 * This class holds all the validations Validation Helper
 */
export class ValidationHelper {
  /**
   * @functions {validateNone} - Validate a String
   * @return {IValidationResponse}
   */
  public static validateNone(): IValidationResponse {
    return { isValid: true, message: '' };
  }

  /**
   * @functions {validateNotEmpty} - Validate that the value should not be empty
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validateNotEmpty(value: string): IValidationResponse {
    if (!value) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (value.trim().length <= 0) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (value.trim().length > 120) {
      return {
        isValid: false,
        message: CANNOT_EXCEED_LIMIT,
      };
    }

    return {
      isValid: true,
      message: '',
    };
  }

  /**
   * @functions {validatePassword} - Validate that the value should not be less than 6 and more than 16 characters
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validatePassword(value: string): IValidationResponse {
    if (!value) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (value.trim().length <= 0) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (value.trim().length < 6 || value.trim().length > 16) {
      return {
        isValid: false,
        message: PLEASE_ENTER_VALID_PASSWORD,
      };
    }

    return {
      isValid: true,
      message: '',
    };
  }

  /**
   * @functions {validateURL} - Validate  that the value should be URL
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validateURL(value: string): IValidationResponse {
    if (!RegexLibrary.URL.test(value)) {
      return {
        isValid: false,
        message: PLEASE_ENTER_VALID_URL,
      };
    }
    return {
      isValid: true,
      message: '',
    };
  }

  /**
   * @functions {validatePhone} - Validate  that the value should be Phone Number
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validatePhone(value: string): IValidationResponse {
    if (RegexLibrary.PHONE_NUMBER.test(value)) {
      return {
        isValid: true,
        message: '',
      };
    }

    return {
      isValid: false,
      message: PLEASE_ENTER_VALID_PHONENUMBER,
    };
  }

  /**
   * @functions {validateZipCode} - Validate  that the value should be Zipcode
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static validateZipCode(value: string): IValidationResponse {
    if (!value) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (value.trim().length <= 0) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (value.trim().length < 5 || value.trim().length > 10) {
      return {
        isValid: false,
        message: PLEASE_ENTER_VALID_ZIP_CODE,
      };
    }

    return {
      isValid: true,
      message: '',
    };
  }

  /**
   * @functions {emailValidator} - Validate an Email address
   * @param {string} value
   * @return {IValidationResponse}
   */
  public static emailValidator = (value: string): IValidationResponse => {
    const trimedValue = value.trim().toLocaleLowerCase();

    if (trimedValue.length === 0) {
      return {
        isValid: false,
        message: THIS_FILED_IS_REQUIRED,
      };
    }

    if (!RegexLibrary.MAIL.test(trimedValue)) {
      return {
        isValid: false,
        message: MUST_BE_IN_VALID_FORMAT,
      };
    }
    return { isValid: true, message: '' };
  };
}
