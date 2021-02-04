// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    handleClick = (event) => {
        let func = this.props.onDelayedClick;
        // let e = event;
        event.persist();
        setTimeout(function() {func(event)}, this.props.delay);
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>Button</button>
        )
    }
}