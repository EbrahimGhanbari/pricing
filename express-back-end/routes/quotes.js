const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([1, 2, 3])
});

router.get('/:quoteID', (req, res) => {
    res.send(req.params.quoteID);
});


module.exports = router;