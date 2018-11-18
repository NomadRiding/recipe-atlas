import Apps from './src/components/App';
// const express = require('express');


// const app = express();
    
// app.use(express.static(__dirname + '/client/build'));

// app.get('/animals', (req, res) => {
//     res.json({ data: [{ name: 'Cougar', image: 'https://twistedsifter.files.wordpress.com/2010/09/cougar-close-up-face-eyes.jpg?w=800&h=598' }, { name: 'Giraffe', image: 'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&h=350' }] });
// })


// const PORT = process.env.PORT || 5000;


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(__dirname + '/client/build'));

app.get('/character/:characterId', async (req, res) => {
    let { data } = await axios
      .get(
        `https://www.food2fork.com/api/search?key=${apiKey}` +
          req.params.characterId
      )
      .catch(err => console.log(err));
    res.json(data);
})
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
