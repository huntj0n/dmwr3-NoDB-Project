const express = require('express');
const app = express();
const port = 4000;

//Controllers
const songCtrl = require('./controllers/songControllers')

//Middleware
app.use(express.json());

//Endpoints
app.get('/api/songs', songCtrl.getSong)
app.post('/api/songs', songCtrl.addSong)
app.delete('/api/songs/:id', songCtrl.deleteSong)
app.put('/api/songs/:id', songCtrl.editSong)


app.listen(port, () => console.log(`Streaming on ${port}`))