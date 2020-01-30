import React, { Component } from 'react';

class NumPlayersForm extends Component {

  render() {
    return (
      <form className="num-players">
        <label>Cantidad de jugadores por equipo: </label>
        <input type="text"/>
        <button type="submit">-></button>
    </form>   
    )
  }
}

export default NumPlayersForm;