import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request
        setTimeout(() => {
            alert('saved data to cloud')
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);
    // [] sadece ilk yüklendiğinde
    // [persons] data değişince 
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect');
        }
    });
    // her update olduğunda 

    const assignedClasses = [];
    let btnClass = [classes.Button];

    if (props.showPersons) {
        btnClass.push(classes.Red);
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);// push red inside array assignedClasses= ['red']
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);// push bold inside array assignedClasses= ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            {/* <StyledButton alt={this.state.showPersons}
              onClick={this.togglePersonsHandler}>
              Toogle Name
            </StyledButton> */}
            <button
                className={btnClass}
                onClick={props.clicked}>Toogle Name</button>
        </div>
    );
};

export default React.memo(cockpit);