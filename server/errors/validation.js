class ValidationError extends Error {
  constructor(message, statusCode, body) {
    super(message || "Something Went Wrong");
    this.statusCode = statusCode || 500;
    this.body = body || {};
  }
}

module.exports = ValidationError;
