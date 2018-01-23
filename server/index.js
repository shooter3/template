const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, '/../client/static')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/index.html'));
});


app.listen(3000, () => {
    console.log('Template app is running at: "localhost:3000"')
});
