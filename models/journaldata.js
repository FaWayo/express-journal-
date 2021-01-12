const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    backhairlength: {
        type: String,
        required: true,
        
    },
    fronthairlength: {
        type: String,
        required: true
    },
    currentregimen: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Journal", journalSchema)