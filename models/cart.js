const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
            required: true
        },
        size:{
            type:String,
            required:true
        },
        quantity: {
            type: Number,
        },
        cPrice: {
            type: Number
        },
        cDPrice:{
            type:Number
        }
    }],
    totalPrice: {
        type: Number,
        default: 0
    }
})
module.exports = mongoose.model('cart', cartSchema)