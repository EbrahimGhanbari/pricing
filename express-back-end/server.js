const express = require('express');
const helmet = require('helmet');
const quotesAPI = require('./routes/quotes');
const app = express();


app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
app.use('/api/quotes', quotesAPI);



app.get('/', (req, res) => {
    res.send('Hello');
});



const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))