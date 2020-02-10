import React, { Component } from 'react';

class NumPlayersForm extends Component {

  render() {
    return (
      <form className="num-players" onChange={this.props.handlePlayerNum}>
        <label>Cantidad de jugadores por equipo: </label>
        <input type="number"/>
    </form>   
    )
  }
}

export default NumPlayersForm;