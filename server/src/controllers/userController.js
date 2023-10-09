const schemas = require("../models/userModel");
const jwt = require("jsonwebtoken")

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

  const fetchSingleUser = (req, res) => {
    const {email, pass} = req.params;
    schemas.user.findOne({email: req.params.email, password: req.params.password})
    .then((data)=>{
      const token = jwt.sign({email}, "hello",{"expiresIn": "1h"})
      res.json({token:token})
    })
  }

  const fetchUserById = (req, res) => {
    const {id} = req.params;
    schemas.user.findOne({_id:id})
    .then((data)=>{
      res.json({data})
    }).catch((error)=>{
      console.log(error);
    })
  }
  module.exports = {
    addNewUser,
    fetchAllUser,
    fetchSingleUser,
    fetchUserById,
  };

