const rx = require('rxjs');

const userService = require('../services/user.service');

exports.getUser = (req, res) => {

    userService.getUser(req.params.username)
        .subscribe(result => {
                res.status(200);
                res.send(result);
            },
            error => {
                res.status(400);
                res.send(err);
            }
        );
};

exports.createUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    userService.createUser(username, password)
        .subscribe(result => {
                res.status(200);
                res.json(result);
            },
            error => {
                res.status(400);
                res.send(error);
            }
        );
};

exports.deleteUser = (req, res) => {
    userService.deleteUser(username)
        .subscribe(result => {
                res.status(200);
                res.json(result);
            },
            error => {
                res.status(400);
                res.send(error);
            }
        );
};

exports.updatePassword = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    userService.updatePassword(username, password)
        .subscribe(result => {
                res.status(200);
                res.json(result);
            },
            error => {
                res.status(400);
                res.send(error);
            }
        );
};

