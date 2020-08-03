import React, {Component} from 'react';
import axios from 'axios'
import AddSong from './AddSong'
import SongCard from './SongCard'   

class Songs extends Component {
    constructor (props){
        super(props)
        this.state = {
            songs: []
        }
    }


    componentDidMount(){
        axios.get('/api/songs')
        .then((response) => {
            console.log(response)
            this.setState({songs: response.data})
        })
        .catch(err => console.log(err))
    }

    addSong = (name, artist) => {
        axios.post('/api/songs', {name, artist})
        .then((response)=> {
            console.log(response)
            this.setState({songs: response.data})
        })
        .catch(err => console.log(err))
    }

    editSong = (id, name) => {
        axios.put(`/api/songs/${id}`, {name})
        .then((response)=>{
            console.log(response)
            this.setState({songs: response.data})
        })
        .catch(err => console.log(err))
    }
    
    deleteSong= (id) => {
        console.log(id);
        axios.delete(`/api/songs/${id}`)
        .then((response)=> {
            console.log(response)
            this.setState({songs: response.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
                <div className="song-list">
                    <h1>FEATURED SONGS</h1>
                    <div className="cards">
                        {this.state.songs.map((element) => {
                            return <SongCard 
                            info={element} 
                            key={element.id} 
                            deleteSong={this.deleteSong}
                            editSong={this.editSong}
                            />
                        })}
                    </div>
                    <AddSong addSong={this.addSong}/>
                </div>
        )
    }
}
export default Songs