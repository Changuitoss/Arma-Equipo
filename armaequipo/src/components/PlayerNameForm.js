import React, { Component } from 'react';

class PlayerNameForm extends Component {

  handleChange = (e) => {
        this.props.handleNameChange(e.target.value);    
  }

  render() {
    return (
      <form className="player-name" onSubmit={this.props.handleSubmit}>
        <label>Ingresar jugador: </label>
        <input type="text" value={this.props.value} onChange={this.handleChange}/>
        <button type="submit">-></button>
      </form>  
    )
  }
}

export default PlayerNameForm;