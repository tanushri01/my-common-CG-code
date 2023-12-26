/* eslint-disable max-len */

/**
 * This library holdes all the regex we will be using in this project
 * @class RegexLibrary
 */
export class RegexLibrary {
  public static MAIL =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public static PHONE_NUMBER = /^(?=.{5,15})\d{5,15}$/;

  public static SEARCH_CONTACT_NUMBER = /^\+?\d{1,3}[\s-]?\d{3,14}$/gm;

  public static ZIP_CODE = /[0-9]{5}(?:-[0-9]{4})?/g;

  public static URL =
    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

  /** Deny Instanciation of this Class */
  constructor() {
    throw new Error(
      'Cannot instanciate this Class, please use only for static members',
    );
  }
}
