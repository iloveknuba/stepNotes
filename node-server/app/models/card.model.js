module.exports = mongoose => {
    const noteSchema = new mongoose.Schema({
        type: {
            type: String,
            enum: ['card', 'todo'],
            required: true
        },
        title: {
            type: String,
            required: false
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
    },
        { timestamps: true });

    noteSchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("card", noteSchema);
};