import { Schema, model } from "mongoose";

const productSchema = new Schema({
    // name: { type: String, default: 'hahaha' },
    // age: { type: Number, min: 18, index: true },
    // bio: { type: String, match: /[a-z]/ },
    // date: { type: Date, default: Date.now },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    stock: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },

});

const productModel = model('Product', productSchema);

export default productModel;

