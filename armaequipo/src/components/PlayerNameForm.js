import React, { Component } from 'react';

class PlayerNameForm extends Component {
  render() {
    return (
      <form className="player-name" onSubmit={this.props.handleNameSubmit}>
        <label>Ingresar jugador: </label>
        <input type="text" value={this.props.value} onChange={this.props.handleNameChange}/>
        <button type="submit">-></button>
      </form>  
    )
  }
}

export default PlayerNameForm;