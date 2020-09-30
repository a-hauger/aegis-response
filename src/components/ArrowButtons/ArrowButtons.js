import { ReactComponent } from '*.svg';
import React from 'react';
import './ArrowButtons.css';

class ArrowButtons extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <i className={`arrow ${this.props.direction}`} id={`${this.props.id()}`} onClick={this.props.onClick}></i>
        )
    }
}

export default ArrowButtons;