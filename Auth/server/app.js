const express = require("express");
const app = express();
const port = 3000;

require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
/*app.get("/", (req, res) => {
    res.status(201).json("server created");
    // console.log("co");y[]
});
*/
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server Connected at port numner : ${port}`);
});