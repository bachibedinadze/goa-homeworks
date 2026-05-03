const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
    },
    instock: {
        type: Boolean,
        default: true,
    },
});

const Phones = mongoose.model("Phones", phoneSchema);

Module.exports = Phones;