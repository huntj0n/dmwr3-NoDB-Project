import React, {Component} from 'react'

export default class AddSong extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }
    
    handleChange = (value) => {
        this.setState({name: value})
    }

    save = () => {
        this.props.addSong(this.state.name);
        this.setState({name: ''})
    }

    render(){
        return(
            <div className="form">
                <input 
                value={this.state.name} 
                onChange={(e)=> this.handleChange(e.target.value)}
                />
                <button className="btn-add" onClick={this.save}>Add Song</button>
            </div>
        )
    }
}