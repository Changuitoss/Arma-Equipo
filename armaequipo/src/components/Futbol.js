import React from 'react';
import { Component } from 'react';
import Equipo from './Equipo';
import PlayerList from './PlayerList';
import NumPlayersForm from './NumPlayersForm';
import PlayerNameForm from './PlayerNameForm';
 
class Futbol extends Component {

  state = {
    value: [],
    list: [],
    teamA: [],
    teamB: []
  }

  handleNameChange = (e) => {
    const nombre = e.target.value;
    this.setState({ value: nombre })    
  }

  handleNameSubmit = (e) => {
    const list = [...this.state.list];

    list.push(this.state.value)
    this.setState({ list });
    this.setState({ value: []});

    e.preventDefault();    
  }

  addTeamA = (name, e) => {
    const teamA = this.state.teamA;
    const list = this.state.list;

    teamA.push(name);
    list.splice(name, 1);
    
    this.setState({ teamA, list });
  }


  render() {
    return (
      <div className="futbol-container">
        <h1 className="sport-title">Futbol</h1>
        <NumPlayersForm />   
        <PlayerNameForm value={this.state.value} handleNameChange={this.handleNameChange} handleNameSubmit={this.handleNameSubmit}/>
        <ul>
          <PlayerList list={this.state.list} addTeam={this.addTeam}/>
        </ul>
        <ul>
          <Equipo addTeamA={this.addTeamA}/>
        </ul>
        <ul>
          <Equipo />
        </ul>
      </div>
    );
  } 
}

export default Futbol;