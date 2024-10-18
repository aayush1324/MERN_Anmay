const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    exam: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    medium: {
        type: String,
        required: true,
    },
    paper: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('PaperUpload', paperSchema);
