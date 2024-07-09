const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  card: {
    type: Array,
    default:[]
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Array,
    ref: 'Order',
  },
  contact: {
    type: Number,
    // required: true,
  },
  picture:String

});

module.exports = mongoose.model('user', userSchema);


