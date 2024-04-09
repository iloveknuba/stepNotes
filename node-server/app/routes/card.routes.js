module.exports = (app,model) => {
    const cards = require("../controllers/card.controller.js");

    const router = require("express").Router();

    // Create a new card
    router.post("/", (req, res) => cards.create(req, res, model));

    // Retrieve all card
    router.get("/", (req, res) => cards.findAll(req, res, model));
    // Get 1 card
    router.get("/:id", (req, res) => cards.findOne(req, res, model));

    // Update a card with id
    router.put("/:id", (req, res) => cards.update(req, res, model));

    // Delete a card with id
    router.delete("/:id", (req, res) => cards.delete(req, res, model));

    app.use("/api/notes", router);
};