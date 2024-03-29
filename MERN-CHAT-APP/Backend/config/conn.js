const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose.set('strictQuery', false);
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(() => {
    console.log("Database Connected");
}).catch((e) => {
    console.log(e);
});