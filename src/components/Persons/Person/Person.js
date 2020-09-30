import React, { Component } from 'react';
import classes from './Person.css';
// import styled from 'styled-components';

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eeeeee;
//     box-shadow: 0 2px 3px #cccccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//         width: 450px;
//     }
// `;

class Person extends Component {

    render() {
        const rnd = Math.random();
        return (
            <div className={classes.Person}>
                < p onClick={this.props.click} > My name is {this.props.name} and I'm {this.props.age} years old</p>
                < p > {this.props.children}</p >
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>

        );
    }
}
export default Person;