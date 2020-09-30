import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
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
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Mustafa', age: 26 },
      { id: 2, name: 'Gülhan', age: 55 },
      { id: 3, name: 'Kadir', age: 56 },
    ],
    showPersons: false,
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');

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
    console.log('[App.js] render');

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
    //let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        ></Persons>
      );

      // style.backgroundColor = 'red';

      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      // btnClass.push(classes.Red);
    }

    return (
      <div className={classes.App} >
        <button onClick={() => {
          this.setState({ showCockpit: false })
        }
        }>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        ></Cockpit> : null}
        { persons}
      </div >
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hı I\'m react'));
  }
}

export default App;
