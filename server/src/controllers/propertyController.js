const property = require("../models/propertyModel");

const addProperty = (req, res) => {
    
    let newProperty = new property(req.body);
  
    newProperty
      .save()
      .then((user) => {
        console.log("Data saved successfully");
        res.send(user);
        console.log(user);
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
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  module.exports = {
    addProperty,
    fetchAllProperty
    
  };
