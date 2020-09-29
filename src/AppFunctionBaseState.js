import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Mustafa', age: 26 },
      { name: 'Gülhan', age: 55 },
      { name: 'Kadir', age: 56 },
    ],
  });

  const [otherState, setOtherState] = useState({ otherState: 'some other value' });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked');
    // DONT DO THIS this.state.persons[0].name = 'Mustafa Akdoğan';
    setPersonsState({
      persons: [
        { name: 'Mustafa Akdoğan', age: 26 },
        { name: 'Gülhan', age: 55 },
        { name: 'Kadir', age: 57 },
      ],
      // because of hooks 
      //otherState: personsState.otherState
    });
  }

  return (
    <div className="App">
      <h1>Hı ı m react</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies are fucking</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hı I\'m react'));
}

export default app;
