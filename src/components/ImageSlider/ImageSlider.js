import React from 'react';
import './ImageSlider.css';
import NavButtonContainer from '../../containers/NavButtonContainer/NavButtonContainer'
import RadioButtonContainer from '../../containers/RadioButtonContainer/RadioButtonContainer'
import ArrowButtonsContainer from '../../containers/ArrowButtonsContainer/ArrowButtonsContainer';
import SlidesContainer from '../../containers/SlidesContainer/SlidesContainer'

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);

        this.images = this.props.images;
    }

    render() {
        return(
            <div className="slideshow middle">
                <div className="slides">
                    <RadioButtonContainer 
                        images={this.images} 
                        getChecked={this.props.getChecked} />
                    
                    <NavButtonContainer 
                        images={this.props.images} 
                        getChecked={this.props.getChecked} 
                        setChecked={this.props.setChecked} />

                    <SlidesContainer images={this.props.images} />

                    <ArrowButtonsContainer 
                        getChecked={this.props.getChecked} 
                        setChecked={this.props.setChecked} />
                </div>
            </div>
        );
    }
}

export default ImageSlider;