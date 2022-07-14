const mongoose = require('mongoose')

const sightingSchema = mongoose.Schema({
        time: {
            type: mongoose.Schema.Types.Date,
            default: Date.now
        },
        lightsOn: {
            type: Boolean,
            default: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('sighting', sightingSchema)