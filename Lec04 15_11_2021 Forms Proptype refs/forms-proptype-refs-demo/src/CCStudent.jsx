import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CCStudent extends Component {
    constructor(props) {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div>name={this.props.name}</div>
                <div>id={this.props.id}</div>
            </div>
        )
    }
}


CCStudent.propTypes= {
  name:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired

};