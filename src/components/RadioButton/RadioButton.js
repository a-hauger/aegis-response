import React from 'react';
import './RadioButton.css';

const RadioButton = ({imageName, isChecked}) => {
    return(<input
        key={imageName} 
        type="radio" 
        name="r" 
        id={`${imageName}`}
        checked={isChecked === imageName}/>)
}

export default RadioButton;