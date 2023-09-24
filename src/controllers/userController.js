const schemas = require("../models/userModel");

const addNewUser = (req, res) => {
    console.log(req.body);
    let newUser = new schemas.user(req.body);
  
    newUser
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

  const fetchAllUser = (req, res) => {
    schemas.user
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
    addNewUser,
    fetchAllUser,
  };

