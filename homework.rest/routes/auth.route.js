const authService = require('../services/auth.service');

exports.logIn = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    authService.validatePassword(username, password)
        .then(result => {
                if (result.result) {
                    res.status(200);
                    res.json({
                        token: authService.generateToken(result.user)
                    });
                } else {
                    res.status(401);
                    res.json({
                        error: 'username or password was incorrect'
                    })
                }
            }
        )
        .catch(err => {
            res.status(401);
            res.json({
                debugError: err,
                error: 'Username or password was incorrect'
            })
        });
};

exports.validateTokenMiddleware = (req, res, next) => {
    const token = req.headers.token;
    authService.validateToken(token)
        .then(token => {
            req.token = token;
            next();
        })
        .catch( err => {
            res.status(401);
            res.json({
                debugError: err,
                error: 'No auth token was present'
            })
        });
};