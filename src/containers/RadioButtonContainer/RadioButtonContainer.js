import React from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';

class RadioButtonContainer extends React.Component{
    constructor(props){
        super(props);

        this.getChecked = this.getChecked.bind(this);
        this.renderRadioButtons = this.renderRadioButtons.bind(this);

        this.images = this.props.images;
    }

    getChecked() {
        return(this.props.getChecked())
    }
    
    renderRadioButtons() {
        return Object.keys(this.images).map(image => {
            return(<RadioButton
                        imageName={image}
                        key={image}
                        isChecked={this.getChecked()} 
                        onChange={this.setChecked} />)
            })
    }

    render(){
        return(this.renderRadioButtons())
    }
}

export default RadioButtonContainer;