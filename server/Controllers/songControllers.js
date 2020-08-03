let songs = require('../songs.json');
let nextId = 7

module.exports = {
    getSong: (req, res) => {
        return res.status(200).send(songs)
    },
    addSong: (req, res) => {
        const {name} = req.body
        const newSong = {
            id: nextId,
            name: name, 
        }
        nextId++
        songs.push(newSong)
        return res.status(200).send(songs)
    },
    deleteSong: (req, res) => {
        console.log(req.params)
        const {id} = req.params

        songs = songs.filter(elem => elem.id !== +id)
        
        return res.status(200).send(songs)
    },
    editSong: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const index = songs.findIndex((elem) => {
            return elem.id === +id
        })
        songs[index].name = name
       
        return res.status(200).send(songs)
    }
}