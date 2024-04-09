module.exports = (app,model) => {
    const lists = require("../controllers/list.controller.js");

    const router = require("express").Router();

    router.post("/", (req, res) => lists.create(req, res, model));
    router.get("/", (req, res) => lists.findAll(req, res, model));
    router.get("/:id", (req, res) => lists.findOne(req, res, model));
    router.put("/:id", (req, res) => lists.update(req, res, model));
    router.delete("/:id", (req, res) => lists.delete(req, res, model));

    app.use("/api/lists", router);
};