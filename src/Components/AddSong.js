import React, {Component} from 'react'

export default class AddSong extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            artist: '',
            showForm: false
        }
    }
    
    nameChange = (value) => {
        this.setState({name: value})
    }
    artistChange = (value) => {
        this.setState({artist: value})
    }

    save = (name, artist) => {
        this.props.addSong(name, artist);
        this.setState({name: '', artist: ''});
    }

    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    render(){
        return(
            <div className="form">
                {this.state.showForm ? (
                    <form className="newSongForm">
                        <input 
                        className="input-input"
                        value={this.state.name} 
                        onChange={(e)=> this.nameChange(e.target.value)}
                        placeholder="Enter Song Name"
                        />
                        <input
                        className="input-input"
                        value={this.state.artist}
                        onChange={(e)=> this.artistChange(e.target.value)}
                        placeholder="Enter Artist Name"
                        />
                        <button className="btn btn-cancel btn-form" onClick={this.toggleForm}>Cancel</button>
                        <button className="btn-add" onClick={()=>this.save(this.state.name, this.state.artist)}>Add Song</button>
                    </form> 
                    ):(
                        <button className="btn btn-add" onClick={this.toggleForm}>Add A New Song</button>
                    )    
                }
            </div>
        )
    }
}