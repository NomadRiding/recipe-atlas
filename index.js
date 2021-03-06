
// const express = require('express');
let key;
if(process.env.PORT) {
    key = process.env.API_KEY
} else {
    let {apiKey} = require('./config.js');
    key = apiKey
}


const express = require('express');
const axios = require('axios');


const app = express();

app.use(express.static(__dirname + '/client/build'));

app.get('/api', async (req, res) => {
    let {data} = await axios.get(`https://www.food2fork.com/api/search?key=${key}`)
    res.send(data)
});

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
