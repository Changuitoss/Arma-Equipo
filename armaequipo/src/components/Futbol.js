import React from 'react';
import { Component } from 'react';
import Equipo from './Equipo';
import Jugadores from './Jugadores';
 
class Futbol extends Component {

  state = {
    lista: [],
    equipoA: [],
    equipoB: []
  }

  myInput = React.createRef();

  addJugadorLista = (e) => {
    e.preventDefault();
    const nombreJugador = this.myInput.current.value;

    let lista = [...this.state.lista]

    if (nombreJugador.length > 0) {
      lista.push(nombreJugador);
    }

    this.setState({ lista });
    console.log('stateLista: ', this.state.lista)
    e.currentTarget.reset();
  }

  addJugadorEquipo = (e) => {
    const equipoA = [...this.state.equipoA];
    const equipoB = [...this.state.equipoB];
    const lista = [...this.state.lista];
    let equipo = e.currentTarget.className;
    const nombre = e.currentTarget.attributes.nombre.nodeValue;
    const index = lista.indexOf(nombre);

    if(equipo === "equipoA"  && !equipoA.includes(nombre) && !equipoB.includes(nombre)) {
      equipoA.push(nombre);
      lista.splice(index, 1);
    } else if (equipo === "equipoB"  && !equipoB.includes(nombre) && !equipoA.includes(nombre)) {
        equipoB.push(nombre);
        lista.pop(nombre);
    }

    this.setState({ equipoA, equipoB, lista });
  }



  render() {
    return (
      <div className="futbol-container">
        <h1 className="titulo-deporte">Futbol</h1>
        <form className="cant-jugadores">
          <label>Cantidad de jugadores por equipo: </label>
          <input type="text"/>
          <button type="submit">-></button>
        </form>      

        <form className="nombre-jugadores" onSubmit={this.addJugadorLista}>
          <label>Ingresar jugador: </label>
          <input type="text" ref={this.myInput}/>
          <button type="submit">-></button>
        </form>

        <Jugadores lista={this.state.lista} addJugadorEquipo={this.addJugadorEquipo}/>
        <Equipo equipoA={this.state.equipoA}/>
        <Equipo equipoB={this.state.equipoB}/>
      </div>
    );
  } 
}

export default Futbol;