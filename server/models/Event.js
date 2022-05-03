const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  information: {
    type: String
  },

  email: {
    type: String
  },
  rollno: {
    type: String
  }
}, {
    collection: 'eventsapp'
  })

module.exports = mongoose.model('Event', eventSchema)