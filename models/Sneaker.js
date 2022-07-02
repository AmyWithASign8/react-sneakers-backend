const {Schema, model, ObjectId} = require('mongoose');

const Sneaker = new Schema({
    title:{type: String},
    price:{type: Number},
    imageUrl:{type: String}
})

module.exports = model('Sneaker', Sneaker)