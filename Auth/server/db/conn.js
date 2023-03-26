const mongoose = require("mongoose");
//const DB = "mongodb+srv://pa123456:Parth1202#@cluster1.53hfmny.mongodb.net/Authusers?retryWrites=true&w=majority";
const DB = "mongodb+srv://yash1202:eXweZPuHDPPUHOYa@cluster12.sikfy3a.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected");
}).catch((e) => {
    console.log(e);
});


//mongoose.connect(DB, { useNewUrlParser: true }, (err, db) => {
//  console.log("Database Connected");
//console.log(err);
//})