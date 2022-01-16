const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  address1: {
    type: "string",
    required: true,
  },
  address2: {
    type: "string",
    required: true,
  },
  coords: {
    type: "object",
    properties: {
      lat: {
        type: "number",
      },
      lng: {
        type: "number",
      },
    },
    required: ["lat", "lng"],
  },
  placeId: {
    type: "string",
    required: true,
  },
  upvotes: {
    type: "integer",
    required: true,
    default: 0,
  },
  downvotes: {
    type: "integer",
    required: true,
    default: 0,
  },
});