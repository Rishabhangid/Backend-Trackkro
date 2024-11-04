// IMOORTING PACKAGES 
const express = require("express");
const app = express();
const cors = require("cors");

// DOTENV FILE IMPORTED
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 6036;

const CLIENT_URL = process.env.CLIENT_URL;
// CONNECTING DATABASE & MIDDLEWARES
const corsOptions = {
    origin: CLIENT_URL,  // Set this to the URL of your front-end
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
    // optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); // for hosting porpuse
// app.use(cors());    
require("./db/connection");
app.use(express.json());                // USED TO CONVERT DATA IN JSON

// SERVER TESTING AND INITIALIZING
app.use(require("./routes/auth"));
app.get("/",(req,res)=>{ res.send("Hy")})
app.listen(PORT,()=>{console.log(`Server Started at Port No. ${PORT}`)})
