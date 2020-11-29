module.exports = class CustomError extends Error {
  constructor(errorDescriptor) {
    super(errorDescriptor.message);
    this.statusCode = errorDescriptor.statusCode
      ? errorDescriptor.statusCode
      : 500;
  }
};
  