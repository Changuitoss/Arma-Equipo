import React, { Component } from 'react';
import './Equipo.css';

class Equipo extends Component {
  render() {
    const team = this.props.team;
    const teamName= this.props.teamName;
    const gkState = this.props.gkState;
    let teamItems;

    if(!gkState) {
       teamItems = team.map(name => 
        <li key={name}>
          {name}
          <button onClick={this.props.removeFromTeam} 
                  name={name} 
                  teamname={teamName}>
            x
          </button>
        </li>);
    } else {
      teamItems = team.map(name => 
        <li key={name}>
          {name}
          <button onClick={this.props.handleGoalKeeperSelect}
                  teamname={teamName}
                  name={name}
                  className="gk-btn">
                  
            arquero
          </button>
          <button onClick={this.props.removeFromTeam} 
                  name={name} 
                  teamname={teamName}>
            x
          </button>
        </li>);
    }


    return (
        <div>
          <ul>
            {teamItems}
          </ul>
        </div>

        
    )}    
}

export default Equipo;