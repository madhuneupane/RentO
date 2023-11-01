const property = require("../models/propertyModel");

const addProperty = (req, res) => {
    
    let newProperty = new property(req.body);

  //console.log(newProperty);
    newProperty
      .save()
      .then((user) => {
        console.log("Data saved successfully");
        res.send(user);
        //console.log(user);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  const addInterested = (req, res) => {
    const { propertyId, interestedId } = req.body;
  
    property
      .findOneAndUpdate(
        { _id: propertyId },
        { $push: { interestedList: interestedId } },
        { new: true } 
      )
      .then((updatedProperty) => {
        if (!updatedProperty) {
          return res.status(404).json({ error: "Property not found" });
        }
        res.json(updatedProperty);
      })
      .catch((error) => {
        console.error("Error adding interested ID:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  };


  const fetchPropertiesByOwner = (req, res) => {
    const ownerId = req.body.ownerId;
    console.log(ownerId);
  
    property
      .find({ ownerID: ownerId })
      .then((properties) => {
        res.json(properties);
      })
      .catch((error) => {
        console.error("Error fetching properties by owner:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  };

  const fetchAllProperty = (req, res) => {
    property
      .find({})
      .then((data) => {
        res.json(data);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchPropertyById = (req, res) => {
    const { id } = req.params;
    property
      .findOne({ _id: id })
      .then((data) => {
        res.json({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  module.exports = {
    addProperty,
    fetchAllProperty,
    fetchPropertyById,
    addInterested,
    fetchPropertiesByOwner
    
    
  };
  