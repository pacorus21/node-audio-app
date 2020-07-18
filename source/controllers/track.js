const path = require('path');
const fs = require('fs');

// helper
const { randomId } = require('../helpers/libs');

// Track Page
module.exports.index = (req, res) => {
    res.render('track');
}

// Upload File
module.exports.upload = (req, res) => {
    // Get File
    const file = req.file;
    const fileExt = path.extname(file.originalname).toLowerCase();

    // Save File
    const saveFile = async () => {
        // Random ID
        var id = randomId();
        var dest = path.resolve('static/uploads/tracks/' + id + fileExt);

        // Check Free Path
        if (!await fs.existsSync(dest)) {
            // Check Extension
            if (fileExt === '.mp3' || fileExt === '.wav' || fileExt === '.wma') {
                // Move File
                await fs.renameSync(file.path, dest);
                res.redirect('/static/uploads/tracks/' + id + fileExt);
            } else {
                // Delete File
                await fs.unlinkSync(file.path);
                res.send('Extension ' + fileExt + ' not allowed.');
            }
        } else {
            // ID exists
            saveFile();
        }
    }
    saveFile();
}