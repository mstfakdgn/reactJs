import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import styled from 'styled-components';


// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black
// `;

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Mustafa', age: 26 },
      { id: 2, name: 'Gülhan', age: 55 },
      { id: 3, name: 'Kadir', age: 56 },
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');
  //   // DONT DO THIS this.state.persons[0].name = 'Mustafa Akdoğan';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 26 },
  //       { name: 'Gülhan', age: 55 },
  //       { name: 'Kadir', age: 57 },
  //     ]
  //   });
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons
    this.setState({
      showPersons: !show
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    //update state like this without changing directly
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      // style.backgroundColor = 'red';

      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');// push red inside array classes= ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');// push bold inside array classes= ['red', 'bold']
    }

    return (
      <div className="App" >
        <h1>Hı ı m react</h1>
        <p className={classes.join(' ')}>This is working</p>
        {/* <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
          Toogle Name
        </StyledButton> */}
        <button
          className="button"
          onClick={this.togglePersonsHandler}>Toogle Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hı I\'m react'));
  }
}

export default App;
