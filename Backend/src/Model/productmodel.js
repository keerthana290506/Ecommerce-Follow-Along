const {model,Schema} = require('mongoose');

const productSchema = new Schema({
    name:{
        type:String,
        required:[true,'please enter name'],
    },
    email:{
        type:String,
        required:[true,'please enter email'],
        unique:true,
    },
    description:{
        type:String,
        required:[true,'please enter description'],
    },
    price:{
        type:Number,
        required:[true,'please enter price'],
        default:0,
    },
    tag:{
        type:String,
        required:[true,'please enter tag'],
    },
    image:{
        type:[String],
        required:[true,'please enter image'],
    },
    createAt:{
        type:Date,
        default:Date.now,
    }
    
},{timestamps:true
})

const Productmodel  = model('Product',productSchema);


module.exports=Productmodel;