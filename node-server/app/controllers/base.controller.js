exports.findAll = (req, res, Model) => {
    const title = req.query.title;
    const condition = title ? {title: {$regex: new RegExp(title), $options: "i"}} : {};

    Model.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Can't find any cards, " + err.message
        });
    })
}
exports.update = (req, res, Model) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({message: "Choose card to update"});
        return;
    }

    const id = req.params.id;

    Model.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Card with id=${id}.`
            });
        } else res.send({message: "Card was updated successfully."});
    }).catch(() => {
        res.status(500).send({
            message: "Error updating Card with id=" + id
        });
    });
};

exports.delete = (req, res, Model) => {
    if (!req.body) {
        res.status(400).send({message: "Choose card to delete"});
        return;
    }
    const id = req.params.id;
    Model.findByIdAndDelete(id, {useFindAndModify: false}).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete Card with id=${id}.`
            })
        } else res.send({message: "Card was deleted successfully."});

    }).catch(() => {
        res.status(500).send({
            message: "Error deleting Card" + id
        });
    })
}
