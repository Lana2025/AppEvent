const Event = require("../models/event");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const event = await new Event(req.body).save();
        res.send(event);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const event = await Event.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(event);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        res.send(event);
        
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;
