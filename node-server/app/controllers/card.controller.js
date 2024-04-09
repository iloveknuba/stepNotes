const base = require('./base.controller');
exports.delete = base.delete;
exports.update = base.update;
exports.findAll = base.findAll;
exports.findOne = base.findOne;

exports.create = (req, res, Model) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    // Create a CardC
    const card = new Model({
        type: req.body.type,
        title: req.body.title,
        text: req.body.text,
    });

    // Save Card in the database
    card.save(card).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the card."
        });
    });
};