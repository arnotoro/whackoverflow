const express = require('express');
const router = express.Router();

// @route   GET api/users/test
router.get('/users/test', (req, res) => {
    res.status(200).json({success: true, text:'hello world'});
});

router.post('/users/register', (req, res) => {
    console.log(req.body);
    res.status(400).json({success: false, text:'hello world'});
});


module.exports = router;