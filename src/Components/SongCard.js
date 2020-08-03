import React, { Component } from "react"

class SongCard extends Component {
  constructor(props) {
    super(props)
    const{name} = this.props.info
    this.state = {
        edit: false,
        name: name,

    }
  }

  handleChange = (value) => {
      this.setState({name: value})
  }

  toggleEdit = () => {
      this.setState({
          edit: !this.state.edit
      })
  }

  save = () => {
      this.props.editSong(this.props.info.id, this.state.name)
      this.toggleEdit()
  }

  render() {
    return (
      <div>
          {this.state.edit ? (
            <div className="songCard">
                <input value={this.state.name} onChange={(e)=> this.handleChange(e.target.value)}/>
                <button className="btn btn-cancel" onClick={this.toggleEdit}>Cancel</button>
                <button className="btn btn-save" onClick={this.save}>Save</button>
            </div>
          ):(
            <div className="songCard">
                <h2 className="song-info">{this.props.info.name}</h2>
                <h4 className="artist">{this.props.info.artist}</h4>
                <button className="btn btn-edit" onClick={this.toggleEdit}>
                    Edit
                </button>
                <button className="btn btn-delete" onClick={() => this.props.deleteSong(this.props.info.id)}>
                Delete
                </button>
            </div>
          )}
      </div>
    )
  }
}

export default SongCard