import React from 'react';
import './RadioButton.css';

const RadioButton = ({imageName, isChecked, onChange}) => {
    return(<input
        key={imageName} 
        type="radio" 
        name="r" 
        id={`${imageName}`}
        checked={isChecked(imageName)}
        onChange={onChange} />)
}

export default RadioButton;