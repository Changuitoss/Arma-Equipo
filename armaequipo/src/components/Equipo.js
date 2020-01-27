import React, { Component } from 'react';

class Equipo extends Component {
  render() {
    let equipoA = [];
    let equipoB = [];
    this.props.equipoA ? equipoA = this.props.equipoA : equipoB = this.props.equipoB;
    
    //const equipoB = this.props.equipoB;
    return (
      <div className="equipo-wrap">
        <p>Equipo:</p>
        <ul>
          {equipoA.length !== 0 ? equipoA.map(nombre => <li key={nombre + Date.now()}>
                                                          {nombre}
                                                          <button> x </button>
                                                        </li>) 
                                : equipoB.map(nombre => <li key={nombre + Date.now()}>
                                                          {nombre}
                                                          <button> x </button>
                                                        </li>)}
        </ul>
      </div>
    );
  }
}

export default Equipo;