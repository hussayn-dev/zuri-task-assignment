exports.errorHandler = (error, req, res, next) => {
    const err = {
        message : error.message,
        statusCode : error.status
    }
    res.status(err.statusCode).json({message : err.message})
}

exports.notFound = (req, res, next) => {
    res.status(404).json({message : "Route not found"})
}