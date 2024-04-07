module.exports = (app,model) => {
    const cards = require("../controllers/card.controller.js");

    const router = require("express").Router();

    // Create a new Tutorial
    router.post("/", (req, res) => cards.create(req, res, model));

    // Retrieve all Tutorials
    router.get("/", (req, res) => cards.findAll(req, res, model));

    // Update a Tutorial with id
    router.put("/:id", (req, res) => cards.update(req, res, model));

    // Delete a Tutorial with id
    router.delete("/:id", (req, res) => cards.delete(req, res, model));

    app.use("/api/notes", router);
};