import React from 'react';
import { Component } from 'react';
import Equipo from './Equipo';
import PlayerList from './PlayerList';
import NumPlayersForm from './NumPlayersForm';
import PlayerNameForm from './PlayerNameForm';
 
class Futbol extends Component {

  state = {
    value: "",
    list: [],
    teamA: [],
    teamB: []
  }

  handleNameChange = (nombre) => {
    this.setState({ value: nombre })
  }

  handleSubmit = (e, nombre) => {
    const list = [...this.state.list];

    list.push(this.state.value)
    this.setState({ list });
    this.setState({ value: []});

    e.preventDefault();    
  }

  addTeam = (e) => {
    const list = [...this.state.list];
    const name = e.target.name;
    const teamName = e.target.attributes.teamname.value;

    if (teamName === "a") {
      const team = [...this.state.teamA];
      team.push(name);
      list.splice(name, 1);
      this.setState({ teamA: team, list });
    } else {
      const team = [...this.state.teamB]
      team.push(name);
      list.splice(name, 1);
      this.setState({ teamB: team, list });
    }  
  }

  removeTeam = (e) => {
    const name = e.target.name;
    const team = e.target.team;
    const teamState = [...this.state.t]

  }


  render() {
    return (
      <div className="futbol-container">
        <h1 className="sport-title">Futbol</h1>
        <NumPlayersForm />   
        <PlayerNameForm value={this.state.value} handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit}/>
        <ul>
          <PlayerList list={this.state.list} addTeam={this.addTeam}/>
        </ul>
          <h4>Equipo A</h4>
          <Equipo team={this.state.teamA} removeTeam={this.removeFromTeam}/>
          <h4>Equipo B</h4>
          <Equipo team={this.state.teamB} removeTeam={this.removeFromTeam}/>
      </div>
    );
  } 
}

export default Futbol;