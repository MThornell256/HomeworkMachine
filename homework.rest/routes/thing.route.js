const thingService = require('../services/thing.service');

exports.post = (req, res) => {
    thingService.addAThing('testA', 23.99);
    res.send('OK');
}