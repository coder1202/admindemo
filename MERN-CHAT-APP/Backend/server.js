const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './env') });
const dotenv = require("dotenv");
require("./config/conn.js")
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require('./routes/chatRoutes')
const express = require("express");
const { notFound, errorHandler } = require('./middlewares/errorMiddleware.js');
const app = express();
dotenv.config();
//since we taking value from frontend we tell server to accept json data 
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is runing well");
});


app.use('/api/user', userRoutes)
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server Started on port ${PORT}`));