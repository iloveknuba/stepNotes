module.exports = mongoose => {
    const userSchema = new mongoose.Schema({
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: false
            }
        },
        { timestamps: true });


    userSchema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("user", userSchema);
};