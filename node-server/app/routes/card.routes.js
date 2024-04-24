const cards = require("../controllers/card.controller.js");
const verifyToken = require("../middleware/authJWT");
const router = require("express").Router();
module.exports = (app,model) => {


    // Create a new card
    router.post("/", verifyToken,(req, res) => cards.create(req, res, model));

    // Retrieve all card
    router.get("/", verifyToken, (req, res) => cards.findAll(req, res, model));
    // Get 1 card
    router.get("/:id", verifyToken, (req, res) => cards.findOne(req, res, model));

    // Update a card with id
    router.put("/:id", verifyToken, (req, res) => cards.update(req, res, model));

    // Delete a card with id
    router.delete("/:id", verifyToken, (req, res) => cards.delete(req, res, model));

    app.use("/api/notes", router);
};