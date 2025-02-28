const {Router} = require('express');
const {productupload} = require('../../Multer')
const Productmodel = require('../Model/productmodel');
const productrouter = Router();
const path = require('path');
const userModel = require('../Model/userModel');
const { default: mongoose } = require('mongoose');

productrouter.get("/get-product",async(req,res)=>{
    try{
        const productfind = await Productmodel.find();
        console.log(productfind);
        if(!productfind){
            return res.status(400).json({message:"No products found"});
        }

        const products = productfind.map((product)=>{
            return{
                id: product._id,
                name : product.name,
                description : product.description,
                category :product.category,
                tags:product.tag,
                price : product.price,
                image : product.image,
                stock :product.stock,
                email:product.email,
                images:product.images,
                createdAt:product.createdAt,


            }
        });
        return products
    }
    catch(err){
        console.log(err);
    }
    
})
productrouter.post('/post',async(req,res)=>{
    const  {email,productid,productname,quantity} = req.body

    try{
        if(!email){
            return res.status(404).json({"fill all inputbox"})
        }
        const findemail = await userModel.findOne({email:email})
        if (!findemail){
            return res.status(404).json({'fill the inputbox'})
        }
        if(!mongoose.types.objectId.isValid(productid)){
            return res.status.json({message:'product is not there'})
        }
        if
        const findproduct = await Productmodel.findById(productid)
        if (!findproduct){
            return 
        }
    }
    catch(err){
        console.log("")
    }
})
productrouter.put('/edit-cart',async(req,res)=>{
    const {email,productid,quantity}=req.body
    try{
    
    if(!email||!productid||quantity==undefined){
     return res.status(404).json({message:"put all details"})
    }
    const finduser=await userModel.findOne({email:email})
    if(!finduser){
     return res.status(500).json({message:"user is not found"})
    }
 
    const findproduct=await Productmodel.findOne({_id:productid})
    if(!findproduct||findproduct.stock<=0){
     return res.status(404).json({message:"product not avzailable"})
    }
   
    const findcartproduct=finduser.cart.find(item=>item.productid===productid)
 
    if(!findcartproduct){
     return res.status(404).json({message:"can not find"}) 
    }
    findcartproduct.quantity=quantity
    await finduser.save()
    return res.status(200).json({message:"edited successfully"})
 }
 catch(err){
     console.log(err)
 }
 })
productrouter.post("/post-product",productupload.array('files'),async(req, res) => {
    const {name, description, category, tags, price, stock, email} = req.body;
    const images = req.files.map((file) => file.path);
    try{
        const product = await Productmodel.findone({email:email});
        if(!seller){
            return res.status(400).json({message:"Seller not found"});
        }
        if(images.length === 0){
            return res.status(400).json({message:"Please upload atleast one images"});
        }
        await Productmodel.create({
            name:name,
            description:description,
            category:category,
            tags:tags,
            price:price,
            stock:stock,
            email:email,
            images:images
        });
    }
    catch(err){
        console.log(err);
    }
    res.status(200).json({message:"Product added successfully"});

});
productrouter.put('/edit-product/:id',productupload.array('images',10),async(req,res)=>{
    try{
    const {id }= req.params;
    const{name,description,category,tags,price,stock,email} = req.body;
    const existproduct = await Productmodel.findById(id)
    if(!existproduct){
        res.status(400).json({message:"product does not exist"})
    }
    const updateimages=existproduct.image
    if(req.files & req.files.length>0){
        updateimages=req.files.map((img)=>{
            return `/product/${path.basename(img.path)}`
        })
    }
    existproduct.name= name
    existproduct.description= description
    existproduct.category = category
    existproduct.tags = tags
    existproduct.price = price
    existproduct.stock = stock
    existproduct.email = email
    existproduct.images = updateimages

     await existproduct.save()
     res.status(200).json({product:existproduct})
}catch{
    console.log('error is updating')
}
})
productrouter.delete('/delete-product',async(req,res)=>{
    try{
       const {id} = req.params
       const existproduct = await Productmodel.findById(id)
       if(!existproduct){
        res.status(400).json({message:"product does not exist"})
       } 
       await existproduct.deleteOne()
    }catch(err){
        console.log('error in delete')
    }
})

module.exports = productrouter;
