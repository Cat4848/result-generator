interface Success {
  success: true;
  data: string;
}

interface Fail {
  success: false;
  error: Error;
}

export class ResultGenerator {
  /**
   * The generateSuccess method that takes a string
   * and returns a Success object with success and data properties.
   * The success property is a boolean value.
   * The data property contains the string passed as parameter.
   *
   * @param {string}     data
   * @returns {Success}
   *
   */
  generateSuccess(data: string) {
    const success: Success = {
      success: true,
      data: data
    };
    return success;
  }

  /**
   * The generateError method that takes an "err" unknown parameter
   * and returns a Fail object with success and error properties.
   * The success property is a boolean value.
   * The error property contains an error with "Unknown Error" message
   * if the "err" parameter is of type unknown.
   * If the method is passed an Error object, the error property
   * will contain the error.
   *
   * @param {unknown}     err
   * @returns {Fail}
   *
   */
  generateError(err: unknown) {
    let fail: Fail = {
      success: false,
      error: new Error("Unknown Error")
    };

    if (err instanceof Error) {
      fail.error = err;
    }
    return fail;
  }
}
