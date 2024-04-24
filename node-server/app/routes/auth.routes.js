module.exports = (app, model) => {
    const user = require("../controllers/auth.controller.js");
    const verify = require("../middleware/authValidation");
    const router = require("express").Router();

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // sign up
    router.post("/signUp",
        verify,
        (req, res) => user.signUp(req, res, model)
    );


    // sign in
    router.post("/signIn",
        (req, res) => user.signIn(req, res, model));


    app.use("/api/auth", router);
};