cnost path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
});

modeule.exports = router;