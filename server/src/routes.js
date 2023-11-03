const userController = require("./controllers/userController");
const propertyController = require("./controllers/propertyController");
const openAiController = require("./controllers/openAiController");
const craigEnd = require("./controllers/craigExtract");
const jwt = require("jsonwebtoken");

const routes = (app) => {
  app.route("/addUser").post(userController.addNewUser);
  app.route("/fetchAllUser").get(verifyToken, userController.fetchAllUser);
  app
    .route("/fetchSingleUser/:email/:password")
    .get(userController.fetchSingleUser);
  app.route("/fetchUserById/:id").get(userController.fetchUserById);

  app.route("/addProperty").post(verifyToken, propertyController.addProperty);
  app
    .route("/addInterested")
    .post(verifyToken, propertyController.addInterested);
  app.route("/fetchAllProperty").get(propertyController.fetchAllProperty);
  app.route("/fetchPropertyById/:id").get(propertyController.fetchPropertyById);
  app
    .route("/fetchPropertiesByOwner/:id")
    .get(verifyToken, propertyController.fetchPropertiesByOwner);

  app
    .route("/descriptionSuggest")
    .post(verifyToken, openAiController.suggestDescription);

  app.route("/craigExtract").get(craigEnd.extractFromCraig);
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  try {
    jwt.verify(token, "RentOMadhu");

    next();
    //testing
  } catch (error) {
    console.log(error);
  }
};

module.exports = routes;
