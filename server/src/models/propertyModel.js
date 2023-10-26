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
      image1:{
        type:String,
      },
      image2:{
        type:String,
      },
      image3:{
        type:String,
      },
      image4:{
        type:String,
      },
      image5:{
        type:String,
      },
      image6:{
        type:String,
      }
    },
    pet: {
      type: Boolean,
      default: false,
    },
    parkingSpace: {
      type: Boolean,
      default: false,
    },
    wifi: {
      type: Boolean,
      default: false,
    },
    heating: {
      type: Boolean,
      default: false,
    },
    ac: {
      type: Boolean,
      default: false,
    },
    laundry: {
      type: Boolean,
      default: false,
    },
    elevator: {
      type: Boolean,
      default: false,
    },
    smoking: {
      type: Boolean,
      default: false,
    },
    tv: {
      type: Boolean,
      default: false,
    },
    wheelchair: {
      type: Boolean,
      default: false,
    },
    balcony: {
      type: Boolean,
      default: false,
    },
    pool: {
      type: Boolean,
      default: false,
    },
    gym: {
      type: Boolean,
      default: false,
    },
    furnished: {
      type: Boolean,
      default: false,
    },
    dishwasher: {
      type: Boolean,
      default: false,
    },
    description: {
        type: String,
        
      },
      rent: {
        type: Number,
        
      },
      postedDate:{
        type: String,
        default: new Date().toLocaleDateString()
      }

  });


const property = mongoose.model("property", propertySchema);
module.exports = property;
