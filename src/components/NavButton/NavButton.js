import React, {useState} from 'react';
import './NavButton.css';

const NavButton = ({imageName}) => {
    return <label for={imageName} id={imageName} className={`circle`}></label>;
}

export default NavButton;