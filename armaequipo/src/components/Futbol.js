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
    goalkeeperA: "",
    goalkeeperB: ""
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
      const gkState = this.state.goalkeeperA;
      const team = [...this.state.teamA];
      team.push(name);
      list.splice(list.indexOf(name), 1);
      this.setState({ teamA: team, list }, () => this.addPlayerGKBtnCheck(team, gkState));
    } else {
      const team = [...this.state.teamB]
      team.push(name);
      list.splice(list.indexOf(name), 1);
      this.setState({ teamB: team, list }, this.gkBtnCheck);
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
    
    if(team === "teamA") {
      const gkState = this.state.goalkeeperA;
      this.removePlayerGKBtnCheck(name, gkState);
    } else if (team === "teamB") {
        const gkState = this.state.goalkeeperB;
        this.removePlayerGKBtnCheck(name, gkState);
    }

    teamState.splice(teamState.indexOf(name), 1);
    list.push(name);

    this.setState({ [team]: teamState}, () => {this.setState({ list })}); 
  }

  handleGoalKeeperState = (e) => {
    const goalkeeperTeam = e.target.attributes.name.value;
    this.setState({ [goalkeeperTeam]: e.target.checked });  //changes goalkeeperA state to True if checked.
  }

  handleGoalKeeperSelect = (e) => {
    const teamName = e.target.attributes.teamname.value;
    const team = [...this.state[teamName]];
    const playerName = e.target.name;

    const gkFirst = team.sort(player => {
      return player === playerName ? -1 : 1
    })

    this.setState({ [teamName]: gkFirst }, this.gkBtnCheck)
  }

  addPlayerGKBtnCheck = (team, gkState) => {  
    const gkBtnList = Array.from(document.querySelectorAll('.gk-btn'));
    const gkNoDisplayList = Array.from(document.querySelectorAll('.gkNoDisplay'));
    console.log('gkbtnlist: ', gkBtnList);
    
    if(gkState && gkNoDisplayList.length === 1) {
      for (var i = 1; i <= gkBtnList.length - 1; i++) {
        gkBtnList[i].classList.add('gkNoDisplay');
      }
    } 
  }

  removePlayerGKBtnCheck = (name, gkState) => {  
    const gkBtnList = Array.from(document.querySelectorAll('.gk-btn'));
    const gkNoDisplayList = Array.from(document.querySelectorAll('.gkNoDisplay'));

    if (gkState && name === gkBtnList[0].attributes.name.value) {
      gkBtnList.forEach(player => player.classList.remove('gkNoDisplay'));
    }
  }


  gkBtnCheck = () => {  //Checks for the players that were not selected as goalkeeper, and aplyies a "display: none" styled class.
    const gkBtnList = Array.from(document.querySelectorAll('.gk-btn'));
    const gkNoDisplayList = Array.from(document.querySelectorAll('.gkNoDisplay'));

    for(var i = 1; i <= gkBtnList.length - 1; i++) {
      if (gkNoDisplayList.length === 0) {
        gkBtnList[i].classList.add("gkNoDisplay");
      }
      else if(!gkNoDisplayList[0].classList.contains('gkNoDisplay')) {
        gkBtnList[i].classList.remove("gkNoDisplay");
      } 
    } 
  }

  render() {
    return (
      <div className="futbol-container">
        <h1 className="sport-title">Futbol</h1>
        <NumPlayersForm />  

        <PlayerNameForm value={this.state.value} 
                        handleNameChange={this.handleNameChange} 
                        handleSubmit={this.handleSubmit}
        />

        <ul>
          <PlayerList list={this.state.list} 
                      addTeam={this.addTeam} 
                      removeFromList={this.removeFromList}
          />
        </ul>

        <h4>Equipo A</h4>  
        <GoalkeeperForm handleGoalKeeperState={this.handleGoalKeeperState} 
                        goalkeepername="goalkeeperA"
        />                
        <Equipo team={this.state.teamA} 
                teamName="teamA" 
                removeFromTeam={this.removeFromTeam} 
                gkState={this.state.goalkeeperA}
                handleGoalKeeperSelect={this.handleGoalKeeperSelect}
        />

        <h4>Equipo B</h4>  
        <GoalkeeperForm handleGoalKeeperState={this.handleGoalKeeperState} 
                        goalkeepername="goalkeeperB"
        />
        <Equipo team={this.state.teamB} 
                teamName="teamB" 
                removeFromTeam={this.removeFromTeam} 
                gkState={this.state.goalkeeperB}
        />
      </div>
    );
  } 
}

export default Futbol;