const schemas = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 

const addNewUser = (req, res) => {

  const { firstName, lastName, email, password, phonenumber, isOwner } = req.body;
  
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return res.status(500).send("Error saving user");
    }

    const newUser = new schemas.user({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phonenumber,
      isOwner,
      
    });

    newUser
      .save()
      .then((user) => {
        console.log("Data saved successfully");
        res.send(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        res.status(500).send("Error saving user");
      });
  });
};

const fetchSingleUser = (req, res) => {
  const { email, password } = req.params;
  console.log(req.params.email, req.params.password);
  schemas.user
    .findOne({ email: req.params.email })
    .then((data) => {
      if (data) {
        // Compare the entered password with the hashed password
        console.log(password, data.password);
        bcrypt.compare(password, data.password, (err, result) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return res.status(500).send("Error fetching user");
          }

          if (result) {
            const token = jwt.sign({ email }, "RentOMadhu", {
              expiresIn: "1h",
            });
            console.log(JSON.stringify(data));
            res.json({ token: token, id: data._id });
          } else {
            res.status(401).send("Password incorrect");
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      res.status(500).send("Error fetching user");
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

const fetchUserById = (req, res) => {
  const { id } = req.params;
  schemas.user
    .findOne({ _id: id })
    .then((data) => {
      res.json({ data });
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = {
  addNewUser,
  fetchAllUser,
  fetchSingleUser,
  fetchUserById,
};
