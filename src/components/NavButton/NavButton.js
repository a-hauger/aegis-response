import React, {useState} from 'react';
import './NavButton.css';

const NavButton = ({isChecked, imageName}) => {
    return (<label 
                key={imageName}
                htmlFor={imageName} 
                id={imageName} 
                className={`circle ${isChecked() === imageName}`} >
            </label>);
}

export default NavButton;