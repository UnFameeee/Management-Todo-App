const LogService = require('../services/log.service');

module.exports.showAllLog = async(req, res) => {
    const dataReturn = await LogService.showLog();
    res.status(dataReturn.statusCode).json(dataReturn.data);
};