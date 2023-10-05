const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    title: {
      type: String,
      
    },
    roomNumbers: {
      type: Number,
     
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
    description: {
        type: String,
        
      },
      rent: {
        type: Number,
        
      },

  });

  const property = mongoose.model("property", propertySchema);
  module.exports = property;