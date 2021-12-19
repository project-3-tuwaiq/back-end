const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const {roleRouter}=require("../back-end/routers/routes/roleRouter");
const { patientRouter } = require('../back-end/routers/routes/patientRouter');
const {userRouter} = require('../back-end/routers/routes/userRouter');
/* --------------------------- Database connection -------------------------- */

mongoose.connect("mongodb+srv://hospitalDB:Aa123456@cluster0.8aevd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err, result) =>{
    console.log("database connected");
})


/* ----------------------------- import Routers ----------------------------- */

app.use(express.json());
app.use(cors())

// app.get('/', (req, res) => {
//     res.redirect('/roles');
//   });

 

/* --------------------------------- routers -------------------------------- */

app.use('/roles',roleRouter)
app.use('/patient',patientRouter)
app.use('/user',userRouter)






/* ----------------------------- PORT connection ---------------------------- */

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server on ${PORT}`);
})