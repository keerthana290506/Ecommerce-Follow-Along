const express=require('express');
const connectDB = require('./src/Database/db');
const userModel = require('./src/Model/userModel');
const Productmodel = require('./src/Model/productmodel')
const userrouter = require('./src/Controllers/user');
const productrouter = require('./src/Controllers/Product')
const app=express()
app.use(express.json());

require('dotenv').config({
    path:'./src/config/.env'
});

const PORT=process.env.port || 5000;
const url=process.env.db_url;

app.get('/',(req,res)=>{   
    res.send('Hello World');
})



app.listen(PORT,async()=>{

try{
   await connectDB(url);
    console.log(`Server is running on port ${PORT}`);
}
catch(err){
    console.log(err);
}
    
})
app.use('/auth',userrouter);
app.use('/product',productrouter)