class CustomError extends Error{
    constructor(message, status) {
        super(message)
   this.status = statusCode || 500
    }
}
module.exports = { CustomError}