import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toogleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

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

    useEffect(() => {
        toogleButtonRef.current.click();
    }, []);
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
                ref={toogleButtonRef}
                className={btnClass.join(' ')}
                onClick={props.clicked}>Toogle Name
            </button>
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}>Login</button>}
            
            </AuthContext.Consumer> */}

            <button onClick={authContext.login}>Login</button>
        </div>
    );
};

export default React.memo(cockpit);