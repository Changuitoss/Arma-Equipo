import React, { Component } from 'react';
import Equipo from './Equipo';
import PlayerList from './PlayerList';
import NumPlayersForm from './NumPlayersForm';
import PlayerNameForm from './PlayerNameForm';
import GoalkeeperForm from './GoalkeeperForm';
import PlayersRemaining from './PlayersRemaining';
import './Futbol.css';
 
class Futbol extends Component {

  state = {
    value: "",
    list: [],
    numPlayers: 0,
    teamA: [],
    teamB: [],
    suplentes: [],
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
  
    if (teamName === "teamA") {
      const gkState = this.state.goalkeeperA;
      const team = [...this.state.teamA];
      team.push(name);
      list.splice(list.indexOf(name), 1);
      this.setState({ teamA: team, list }, () => this.addPlayerGKBtnCheck(gkState, teamName));
    } else {
      const gkState = this.state.goalkeeperB;
      const team = [...this.state.teamB];
      team.push(name);
      list.splice(list.indexOf(name), 1);
      this.setState({ teamB: team, list }, () => this.addPlayerGKBtnCheck(gkState, teamName));
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
    const teamName = e.target.attributes.teamname.value;

    const teamState = [...this.state[teamName]];
    const list = [...this.state.list]; 
    
    if(teamName === "teamA") {
      const gkState = this.state.goalkeeperA;
      this.removePlayerGKBtnCheck(name, gkState, teamName);
    } else if (teamName === "teamB") {
        const gkState = this.state.goalkeeperB;
        this.removePlayerGKBtnCheck(name, gkState, teamName);
    }

    teamState.splice(teamState.indexOf(name), 1);
    list.push(name);

    this.setState({ [teamName]: teamState}, () => {this.setState({ list })}); 
  }

  handleGoalKeeperState = (e) => {
    const goalkeeperTeam = e.target.attributes.name.value;
    this.setState({ [goalkeeperTeam]: e.target.checked });  //changes goalkeeperA state to True if checked.
  }

  handleGoalKeeperSelect = (e) => {
    const teamName = e.target.attributes.teamname.value;
    const team = [...this.state[teamName]];
    const playerName = e.target.name;
    const gkNoDisplayList = Array.from(document.querySelectorAll(`.${teamName} .gkNoDisplay`));
    const gkBtnList = Array.from(document.querySelectorAll(`.${teamName} .gk-btn`));
    
    if(gkBtnList[0].attributes.name.value === playerName && gkNoDisplayList.length > 0) { 
      for(var i = 1; i <= gkBtnList.length - 1; i++) {
         gkBtnList[i].classList.remove("gkNoDisplay");
      }
      return;
    }

    const gkFirst = team.sort(player => {
      return player === playerName ? -1 : 1
    })

    this.setState({ [teamName]: gkFirst }, () => this.gkBtnCheck(teamName))
  }

  addPlayerGKBtnCheck = (gkState, teamName) => {  
    const gkBtnList = Array.from(document.querySelectorAll(`.${teamName} .gk-btn`));
    const gkNoDisplayList = Array.from(document.querySelectorAll(`.${teamName} .gkNoDisplay`));
    console.log('team: ', teamName)
    
    if(gkState && gkNoDisplayList.length === 1) {
      for (var i = 1; i <= gkBtnList.length - 1; i++) {
        gkBtnList[i].classList.add('gkNoDisplay');
      }
    } 
  }

  removePlayerGKBtnCheck = (name, gkState, teamName) => {  
    const gkBtnList = Array.from(document.querySelectorAll(`.${teamName} .gk-btn`));

    if (gkState && name === gkBtnList[0].attributes.name.value) {
      gkBtnList.forEach(player => player.classList.remove('gkNoDisplay'));
    }
  }


  gkBtnCheck = (teamName) => {  //Checks for the players that were not selected as goalkeeper, and aplyies a "display: none" styled class.
    const gkBtnList = Array.from(document.querySelectorAll(`.${teamName} .gk-btn`));
    const gkNoDisplayList = Array.from(document.querySelectorAll(`.${teamName} .gkNoDisplay`));

    for(var i = 1; i <= gkBtnList.length - 1; i++) {
      if (gkNoDisplayList.length === 0) {
        gkBtnList[i].classList.add("gkNoDisplay");
      }
      else if(!gkNoDisplayList[0].classList.contains('gkNoDisplay')) {
        gkBtnList[i].classList.remove("gkNoDisplay");
      } 
    } 
  }

  handlePlayerNum = (e) => {
    let numPlayers = this.state.numPlayers;
    numPlayers = Number(e.target.value);

    this.setState({ numPlayers });

    e.preventDefault();
  }

  render() {
    return (
      <div className="futbol-container">
        <h1 className="sport-title">Futbol</h1>
        <NumPlayersForm handlePlayerNum={this.handlePlayerNum}/>  

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
        <div className="equipos">
          <div className="equipoA">
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
            <PlayersRemaining totalPlayers={this.state.numPlayers} currentPlayers={this.state.teamA}/>
          </div>
          
          <div className="equipoB">
            <h4>Equipo B</h4> 
            <GoalkeeperForm handleGoalKeeperState={this.handleGoalKeeperState} 
                            goalkeepername="goalkeeperB"
            />
            <Equipo team={this.state.teamB} 
                    teamName="teamB" 
                    removeFromTeam={this.removeFromTeam} 
                    gkState={this.state.goalkeeperB}
                    handleGoalKeeperSelect={this.handleGoalKeeperSelect}
            />
            <PlayersRemaining totalPlayers={this.state.numPlayers} currentPlayers={this.state.teamB}/>
          </div>

          <div className="suplentes">
            <h4>Suplentes</h4> 
            <Equipo team={this.state.suplentes} 
                    teamName="suplentes" 
                    removeFromTeam={this.removeFromTeam} 
            />
          </div>
        </div>
      </div>
    );
  } 
}

export default Futbol;