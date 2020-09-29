import React from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';

class RadioButtonContainer extends React.Component{
    constructor(props){
        super(props);

        this.renderRadioButtons = this.renderRadioButtons.bind(this);

        this.images = this.props.images;
    }
    
    renderRadioButtons() {
        return Object.keys(this.images).map(image => {
            return(<RadioButton
                        imageName={image} 
                        isChecked={this.props.isChecked} 
                        onChange={this.props.changePicture} />)
            })
    }

    render(){
        return(this.renderRadioButtons())
    }
}

export default RadioButtonContainer;