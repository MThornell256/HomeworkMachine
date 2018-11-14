const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

const JWT_SECRET_KEY = 'mysecret';

exports.validatePassword = (username, password) => {

    return new Promise((resolve, reject) => {

        User.findOne({username})
            .exec()
            .then(user => {
                if(!user) {
                    reject('user not found');
                }

                bcrypt.compare(password, user.password, (err, result) => {
                    if(err) {
                        reject(err);
                    }

                    resolve({
                        result,
                        user
                    });
                });

            })
            .catch(err => {
                reject(err);
            })
    });
};

exports.generateToken = (user) => {

    const tokenData = {
        userid: user._id,
        username: user.username,
    };

    const tokenOptions = {
        expiresIn: '2h',
    };

    return jwt.sign(tokenData, JWT_SECRET_KEY, tokenOptions);
};

exports.validateToken = (token) => {

    return new Promise( (resolve, reject) =>{
        jwt.verify(token, JWT_SECRET_KEY, (err, data) => {
            if(err) {
                reject(err);
            }

            resolve(data);
        })
    });
};