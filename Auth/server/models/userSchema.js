const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keysecret = "mynameisparthkakadiyaiwanttohelpkl";
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate(value) {

            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,

    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    verifytoken: {
        type: String,
    }

});



//hash password
userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }


    next()
});
//token generate
userSchema.methods.generateAuthtoken = async function() {
    try {
        let token1 = jwt.sign({ _id: this._id }, keysecret, {
            expiresIn: "1d"
        });
        this.tokens = this.tokens.concat({ token: token1 });
        await this.save();
        return token1;
    } catch (e) {
        res.status(422).json(e);
    }
}

//Creating model 
const usedb = new mongoose.model("users", userSchema);

module.exports = usedb;