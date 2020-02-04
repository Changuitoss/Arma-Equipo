import React, { Component } from 'react';
import Equipo from './Equipo';
import PlayerList from './PlayerList';
import NumPlayersForm from './NumPlayersForm';
import PlayerNameForm from './PlayerNameForm';
import GoalkeeperForm from './GoalkeeperForm';
 
class Futbol extends Component {

  state = {
    value: "",
    list: [],
    teamA: [],
    teamB: [],
    goalkeeperA: false,
  }

  handleNameChange = (nombre) => {
    this.setState({ value: nombre })
  }

  handleSubmit = (e) => {
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
      list.splice(list.indexOf(name), 1);
      this.setState({ teamA: team, list });
    } else {
      const team = [...this.state.teamB]
      team.push(name);
      list.splice(list.indexOf(name), 1);
      this.setState({ teamB: team, list });
    }  
  }

  removeFromList = (e) => {
    const list = [...this.state.list];
    const name = e.target.name;

    list.splice(list.indexOf(name), 1);

    this.setState({ list })
  }

  removeFromTeam = (e) => {
    const name = e.target.name;
    const team = e.target.attributes.teamname.value;

    const teamState = [...this.state[team]];
    const list = [...this.state.list]; 

    teamState.splice(teamState.indexOf(name), 1);
    list.push(name);

    this.setState({ [team]: teamState}, () => {this.setState({ list })}); 
  }

  handleGoalKeeperState = (e) => {
    const goalkeeperTeam = e.target.attributes.name.value;
    this.setState({ [goalkeeperTeam]: e.target.checked });  //changes goalkeeperA state to True if checked.
  }


  render() {
    return (
      <div className="futbol-container">
        <h1 className="sport-title">Futbol</h1>
        <NumPlayersForm />   
        <PlayerNameForm value={this.state.value} handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit}/>
        <ul>
          <PlayerList list={this.state.list} addTeam={this.addTeam} removeFromList={this.removeFromList}/>
        </ul>
          <h4>Equipo A</h4>  
          <GoalkeeperForm handleGoalKeeperState={this.handleGoalKeeperState} goalkeepername="goalkeeperA"/>

          <Equipo team={this.state.teamA} teamName="teamA" removeFromTeam={this.removeFromTeam} gkState={this.state.goalkeeperA}/>



          <h4>Equipo B</h4>  <GoalkeeperForm />
          <Equipo team={this.state.teamB} teamName="teamB" removeFromTeam={this.removeFromTeam}/>
      </div>
    );
  } 
}

export default Futbol;