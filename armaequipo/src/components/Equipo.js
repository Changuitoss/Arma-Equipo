import React, { Component } from 'react';

class Equipo extends Component {
  render() {
    const team = this.props.team;
    const teamItems = team.map(name => 
      <li key={name}>
        {name}
        <button onClick={this.props.removeFromTeam} name={name}>
          x
        </button>
      </li>);
    return (
        <div>
          <ul>
            {teamItems}
          </ul>
        </div>

        
    )}    
}

export default Equipo;