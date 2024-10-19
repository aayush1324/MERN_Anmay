const Paper = require('../models/PaperUploads');

exports.uploadPaper = async (req, res) => {
    try {
        // Create a new Paper instance with data from the request body
        const newPaper = new Paper({
            exam: req.body.exam,
            class: req.body.class,
            year: req.body.year,
            medium: req.body.medium,
            paper: req.body.paper,
            subject: req.body.subject,
        });

        // Save the paper to the database
        await newPaper.save();
        
        res.status(201).json({ message: 'Paper uploaded successfullys', paper: newPaper });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload paperss', error });
    }
};
