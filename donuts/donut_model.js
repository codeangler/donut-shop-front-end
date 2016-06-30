var mongoose = require('mongoose')

var donutSchema = mongoose.Schema({
    name: String,
    holed: Boolean,
    flavor: String,
    filling: String,
    toppings: [String],
    price: Number,
    expiration: Date,
    calories: Number
})

var Donut = mongoose.model('donut', donutSchema)

module.exports = Donut

// Sample donut1 (document)
// {
//     name: 'Oscar',
//     holed: true,
//     flavor: 'Spicey',
//     filling: 'Jalepeno Jam',
//     toppings: ['Chulula','Tequila','Worm'],
//     price: 20,
//     expiration: Date.now() + ( 60*60*24*7 ),
//     calories: 755
// }

// Sample donut 2
// {
//     "name": 'Glazed Donut',
//     "holed": true,
//     "flavor": 'Glazed',
//     "filling": '',
//     "toppings": [''],
//     "price": 1,
//     "expiration": Date.now() + ( 60*60*24*7 ),
//     "calories": 200
// }
