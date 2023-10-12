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
      min:'2023-10-05',
      max:'2024-05-10'
     
    },
    
    ownerID: {
      type: String,
     
    },

    photoUrls:  [
        {
          url: {
            type: String,
            required: true,
          },}

        ],
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