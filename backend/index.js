const express = require("express");
const cors = require("cors");

require('dotenv').config()

const app = express();

app.use(cors());

app.use(express.json());

app.get("/",(req, res)=>{
    res.send(`<h1 style="color:"blue";>Welcome to our backend application</h1>`);
});

const user = {
    name:"Sooraj so rha hai",
    soorajkadost:"Aditya"
};

app.get("/user",(req, res)=>{
    if(user){
        res.status(200).send(user);
    }else{
        res.status(400).send("User does not exists");
    }
});


app.get("/about",(req, res)=>{
    res.send("This is my about API")
});


app.listen(process.env.PORT, ()=>[
    console.log("Server is running on port 8080")
])