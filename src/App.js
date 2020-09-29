import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
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
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Mustafa Akdoğan')}
            changed={this.nameChangedHandler}
          >My Hobbies are fucking</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}
          /> */}
        </div>
      );
    }
    return (
      <div className="App" >
        <h1>Hı ı m react</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toogle Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hı I\'m react'));
  }
}

export default App;
