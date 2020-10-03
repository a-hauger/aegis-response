import React from 'react';
import './Slides.css';

class Slides extends React.Component {
    constructor(props){
        super(props);

        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({target: img}){
        console.log(`${this.props.imageName} = ${img.offsetWidth} x ${img.offsetHeight}`)
    }

    render(){
        return(
                <div className={`slide ${this.props.imageName}`}>
                    <img onLoad={this.onImgLoad} src={this.props.imageSrc} alt="" />
                </div>
            )
        }
}

export default Slides;