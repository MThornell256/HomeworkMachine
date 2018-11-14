const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const rx = require('rxjs');
const rxOp = require('rxjs/operators');

const User = require('../models/user.model');

exports.getUser = (username) => {
    return rx.from(User.findOne({username}).exec())
};

exports.createUser = (username, password) => {

    return exports.getUser(username)
        .pipe(
            rxOp.tap(user => {
                if (user) {
                    throw new Error("user already exists");
                }
            }),
            rxOp.flatMap(() =>
                rx.from(
                    new User({
                        _id: new mongoose.Types.ObjectId,
                        username: username,
                        password: bcrypt.hashSync(password, 10)
                    }).save()
                )
            ));
};

exports.deleteUser = (username) => {
    return rx.from(User.deleteOne({username}).exec())
};

exports.updatePassword = (username, password) => {
    return rx.from(User.updateOne({username}, {password}).exec())
};