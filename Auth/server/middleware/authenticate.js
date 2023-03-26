const jwt = require("jsonwebtoken");
const userdb = require("../models/userSchema");
const keysecret = "mynameisparthkakadiyaiwanttohelpkl";

const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        //finally verify token
        // console.log(token);
        const verifytoken = jwt.verify(token, keysecret);
        //console.log(verifytoken);
        const rootUser = await userdb.findOne({ _id: verifytoken._id });
        //console.log(rootUser);
        if (!rootUser) { throw new Error("user not found") }
        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id

        next();

    } catch (e) {
        res.status(401).json({ status: 401, message: "Unauthorized no token provide" });
    }

}
module.exports = authenticate;