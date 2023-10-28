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
    fetchPropertyById
    
  };
