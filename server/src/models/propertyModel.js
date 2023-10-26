const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },
  roomNumbers: {
    type: Number,
  },
  bathRoomNumbers: {
    type: Number,
  },
  availableDate: {
    type: Date,
    min: "2023-10-05",
    max: "2024-05-10",
  },

  ownerID: {
    type: String,
  },

  images: {
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    image5: {
      type: String,
    },
    image6: {
      type: String,
    },
  },
  pet: {
    type: Boolean,
    default: true,
  },
  parkingSpace: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
  },
  rent: {
    type: Number,
  },
});

const property = mongoose.model("property", propertySchema);
module.exports = property;
