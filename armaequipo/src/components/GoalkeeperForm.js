import React, { Component } from 'react';

class GoalkeeperForm extends Component {
  render() {
    const goalkeepername = this.props.goalkeepername;

    return (
      <form>
        <label>Arquero fijo?</label>
        <input  type="checkbox" 
                name={goalkeepername} 
                onChange={this.props.handleGoalKeeperState}>
        </input>
      </form>
    )}    
}

export default GoalkeeperForm;