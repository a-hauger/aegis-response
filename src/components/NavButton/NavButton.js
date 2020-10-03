import React from 'react';
import './NavButton.css';

class NavButton extends React.Component {
    render(){
        return(<label
                key={this.props.imageName}
                htmlFor={this.props.imageName}
                id={this.props.imageName}
                onClick={this.props.setChecked}
                onChange={this.props.setChecked}
                className={`circle ${this.props.getChecked}`}>
            </label>)
    }
}

export default NavButton;