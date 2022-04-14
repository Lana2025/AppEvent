const mongoose = require("mongoose");


const eventsSchema = new mongoose.Schema({
	task: {
        type: String,
        unique: true,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("events", eventsSchema);