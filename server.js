const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')


/* --------------------------- Database connection -------------------------- */

mongoose.connect("mongodb+srv://hospitalDB:Aa123456@cluster0.8aevd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err, result) =>{
    console.log("databse connected");
})


/* ----------------------------- import Routers ----------------------------- */





/* --------------------------------- routers -------------------------------- */









/* ----------------------------- PORT connection ---------------------------- */

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server on ${PORT}`);
})