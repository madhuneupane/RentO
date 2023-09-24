const userController = require("./controllers/userController");
const propertyController = require("./controllers/propertyController");

const routes = (app)=>{
    app.route("/addUser").post(userController.addNewUser);
    app.route("/fetchAllUser").get(userController.fetchAllUser);

   app.route("/addProperty").post(propertyController.addProperty);
   app.route("/fetchAllProperty").get(propertyController.fetchAllProperty);

}

module.exports = routes;