let jwtSecret = require('../configs/config');

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

exports.signUp = (req, res, Model) => {
    // Save User to Database
    Model.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(
        res.send({message: "User registered successfully!"})
    ).catch(err => {
        res.status(500).send({message: "Problems with: " + err.message});
    });
};

exports.signIn = (req, res, Model) => {
    Model.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(404).send({message: "User Not found."});
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({id: user.id},
            jwtSecret.secretToken,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });


        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};