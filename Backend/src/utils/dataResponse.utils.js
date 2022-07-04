const dataReturn = (statusCode, status, message, data) => {
    return {
        statusCode: statusCode, 
        data: {
            status: status,
            message: message,
            data: data
        }
    }
}

module.exports = dataReturn;