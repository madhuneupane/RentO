const userController = require("./controllers/userController");
const propertyController = require("./controllers/propertyController");
const jwt = require("jsonwebtoken");

const routes = (app)=>{
    app.route("/addUser").post(userController.addNewUser);
    app.route("/fetchAllUser").get(verifyToken,userController.fetchAllUser);
    app.route("/fetchSingleUser/:email/:password").get(userController.fetchSingleUser);

   app.route("/addProperty").post(verifyToken,propertyController.addProperty);
   app.route("/fetchAllProperty").get(verifyToken,propertyController.fetchAllProperty);

}

const verifyToken =(req,res,next)=>{
    const token = req.headers.authorization;
    console.log(token);

if(!token){
    return res.status(401).json({message: "unauthorized"});
}
try {
    jwt.verify(token, "hello")
    next();
    //testing
} catch (error) {
    console.log(error);
    
}

    
   

    
   
}

module.exports = routes;