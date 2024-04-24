const verifyToken = require('../middleware/authJWT');
module.exports = (app,model) => {
    const lists = require("../controllers/list.controller.js");

    const router = require("express").Router();

    router.post("/",verifyToken, (req, res) => lists.create(req, res, model));
    router.get("/",verifyToken, (req, res) => lists.findAll(req, res, model));
    router.get("/:id",verifyToken, (req, res) => lists.findOne(req, res, model));
    router.put("/:id",verifyToken, (req, res) => lists.update(req, res, model));
    router.delete("/:id",verifyToken, (req, res) => lists.delete(req, res, model));

    app.use("/api/lists", router);
};