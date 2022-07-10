const mongoose = require('mongoose')

const sightingSchema = mongoose.Schema({
        time: {
            type: mongoose.Schema.Types.Date,
            default: Date.now
        },
        lightsOn: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('sighting', sightingSchema)