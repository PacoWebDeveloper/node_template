const success = ({res, status, message, data}) => {
    res.status(status).json({
        error: false,
        status,
        message,
        data
    })
}

const error = ({res, status, message, data, fields}) => {
    res.status(status).json({
        error: true,
        status,
        message,
        data,
        fields
    })
}

module.exports = {
    success,
    error
}