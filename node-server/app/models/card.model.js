module.exports = mongoose => {
    const cardSchema = new mongoose.Schema({
        type: {
            type: String,
            default: "card",
            enum: ['card'],
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: false
        },
    },
        { timestamps: true });
    const listSchema = new mongoose.Schema({
            type: {
                type: String,
                default: "todo",
                enum: ['todo'],
                required: true
            },
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: false
            },
            tasks: [{
                text: {
                    type: String,
                    required: true
                },
                completed: {
                    type: Boolean,
                    default: false
                }
            }],
        })

    cardSchema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    listSchema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    const Card = mongoose.model("card", cardSchema);
    const List = mongoose.model("list", listSchema);

    return {Card,List}
};