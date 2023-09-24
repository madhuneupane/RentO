const userController = require("./controllers/userController");

const routes = (app)=>{
    app.route("/addUser").post(userController.addNewUser);
    app.route("/fetchAllUser").get(userController.fetchAllUser);
}

module.exports = routes;