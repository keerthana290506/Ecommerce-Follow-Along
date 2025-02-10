const {Router} = require('express');
const Productmodel = require('../Model/productmodel');
const productrouter = Router();

productrouter.get("/get-router",(req,res)=>{
    try{
        const productfind = await Productmodel.find();

        const products = productfind.map((product)=>{
            return(
                name : product.name,
                description : product.description,
                category :product.category;
                tags:product.tag,
                price : product.price,
                image : product.image,

            )
        })
    }
    
})
productrouter.post("/post-product",productupload('files'),async(req,res)=>{
    const {name, email, description, price, tag, image} = req.body;
    const images = req.files.map(file=>file.filename);
    try{
        const seller = await Productmodel.findOne({email:email});
        if(!seller){
            return res.status(400).json({message:"Seller already exists"});
        }
        if(images.length===0){
            return res.status(400).json({message:"Please upload atleast one image"});
        }

       const newproduct = await Productmodel.create({
            name:name,
            email:email,
            description:description,
            price:price,
            tag:tag,
            image:images,
        }) 
        res.status(200).json({message:"Product created successfully",newproduct});
    }
    catch(error){
        res.status(400).json({message:"Product not created",error});
    }
})

module.exports = productrouter;
