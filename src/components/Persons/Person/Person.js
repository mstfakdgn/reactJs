import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';


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
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        const rnd = Math.random();
        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {context => 
                        context.authenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>
                    }
                </AuthContext.Consumer> */}

                {
                    this.context.authenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>
                }
                
                < p onClick={this.props.click} > My name is {this.props.name} and I'm {this.props.age} years old</p>
                < p > {this.props.children}</p >
                <input
                    // ref={(inputEl) => {
                    //     this.inputElement = inputEl
                    // }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>

            // <React.Fragment>
            //     < p onClick={this.props.click} > My name is {this.props.name} and I'm {this.props.age} years old</p>
            //     < p > {this.props.children}</p >
            //     <input type="text" onChange={this.props.changed} value={this.props.name} />
            // </React.Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, classes.Person);