import React, { Component } from 'react';

class PlayersRemaining extends Component {

  render() {
    const totalPlayers = this.props.totalPlayers;
    const currentPlayers = this.props.currentPlayers.length;
    
    if(totalPlayers > 0) {
      return (
        <p>
          {`Faltan ${totalPlayers - currentPlayers} jugadores`}
        </p> 
      ) 
    } else {
      return (
        <p>
          
        </p>
      )
    }


  }
}

export default PlayersRemaining;