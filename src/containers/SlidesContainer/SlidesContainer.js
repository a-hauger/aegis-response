import React from 'react';
import Slides from '../../components/Slides/Slides';

class SlidesContainer extends React.Component{
    constructor(props){
        super(props);

        this.renderSlides = this.renderSlides.bind(this);

        this.images = this.props.images;
    }

    renderSlides() {
        return Object.keys(this.images).map(image=> {
            let imageSrc = this.images[image]

            return <Slides key={image} imageName={image} imageSrc={imageSrc} />
        })
    }

    render(){
        return this.renderSlides();
    }
}

export default SlidesContainer;