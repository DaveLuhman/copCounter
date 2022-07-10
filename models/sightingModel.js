const mongoose = require('mongoose')

const sightingSchema = mongoose.Schema({
        time: {
            type: mongoose.Schema.Types.Date,
            default: Date.now
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('sighting', sightingSchema)