const db = require("../models");
const Card = db.cards;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    const card = new Card({
        type: req.body.type,
        title: req.body.title,
        text: req.body.text,
        tasks: req.body.tasks.map(task => ({text: task.text , completed: false}))
    });

    // Save Tutorial in the database
    card
        .save(card)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
exports.findAll = (req, res) => {
    Card.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:"Can't find any cards, " + err.message
            });
        })
}
exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Choose card to update" });
        return;
    }

    const id = req.params.id;

    Card.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Card with id=${id}.`
                });
            } else res.send({ message: "Card was updated successfully." });
        })
        .catch(() => {
            res.status(500).send({
                message: "Error updating Card with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Choose card to delete" });
        return;
    }
    const id = req.params.id;
    Card.findByIdAndDelete(id, { useFindAndModify: false })
        .then(data =>{
            if(!data){
                res.status(404).send({
                    message: `Cannot delete Card with id=${id}.`
                })
            }
            else res.send({ message: "Card was deleted successfully." });

        })
        .catch(() =>{
            res.status(500).send({
                message:"Error deleting Card" + id
            });
        })
}
