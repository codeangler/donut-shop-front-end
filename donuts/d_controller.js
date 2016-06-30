var Donut = require('./donut_model')

var donutController = {
    all: function( req, res ) {
        Donut.find({}, function(error, donuts){
            if( error ) {
                console.error('ERROR finding donuts:', error)
            } else {
                res.json( donuts )
            }
        })
    },
    create: function( req, res ) {
        var newDonut = new Donut( req.body )

        newDonut.save(function(error, donut){
            if( error ) {
                console.error('ERROR saving newDonut:', error)
            } else {
                res.json( donut )
            }
        })
    },
    single: function( req, res ) {
        var id = req.params.id

        Donut.findById(id, function(error, donut){
            if( error ) {
                console.error('ERROR finding donutById:', error)
            } else {
                res.json( donut )
            }
        })
    },
    update: function( req, res ) {
        var id = req.params.id

        // { new: true } we use this third argument so that we get the updated object back in the callback
        Donut.findByIdAndUpdate(id, req.body, { new: true }, function( error, upDonut ){
            if( error ) {
                console.error('ERROR finding updating donut:', error)
            } else {
                res.json( upDonut )
            }
        })
    },
    destroy: function( req, res ) {
        var id = req.params.id

        Donut.findByIdAndRemove(id, function( error ){
            if( error ) {
                console.error('ERROR removing donut!', id)
            } else {
                res.json({
                    success: true,
                    message: "Deleted donut with id: "+ id
                })
            }
        })
    }
}

module.exports = donutController
