const express = require('express');
const router = express.Router();





router.get('/', (req, res) => {
    res.send({ id: "111111", name: "Katty Ajkhfs", destination: "Canada", price: 1000.0 })
});

router.get('/:quoteID', (req, res) => {
    res.send(req.params.quoteID);
});


module.exports = router;