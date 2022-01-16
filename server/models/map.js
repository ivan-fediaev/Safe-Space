const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  coords: {
    type: Object,
    properties: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
    required: true,
  },
  placeId: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    required: true,
    default: 0,
  },
  downvotes: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Map", mapSchema);