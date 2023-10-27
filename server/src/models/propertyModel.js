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
    bedrooms: {
      left: {
        type: String,
      },
      right: {
        type: String,
      },
      top: {
        type: String,
      },
      bottom: {
        type: String,
      },
      front: {
        type: String,
      },
      back: {
        type: String,
      },
    },
  },
  amenities: {
    pet: {
      type: Boolean,
      default: false,
    },
    parkingSpace: {
      type: Boolean,
      default: false,
    },
    heating: {
      type: Boolean,
      default: false,
    },
    airConditioning: {
      type: Boolean,
      default: false,
    },
    washerDryer: {
      type: Boolean,
      default: false,
    },
    wifi: {
      type: Boolean,
      default: false,
    },
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
