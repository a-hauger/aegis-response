import React from 'react';
import './ImageSlider.css';
import NavButtonContainer from '../../containers/NavButtonContainer/NavButtonContainer'
import RadioButtonContainer from '../../containers/RadioButtonContainer/RadioButtonContainer'
import NavButton from '../NavButton/NavButton';

const img1 = require("./IMG_3763_F.jpg");
const img2 = require("./IMG_3766_F.jpg");
const img3 = require("./IMG_3767_F.jpg");
const img4 = require("./IMG_3780_F.jpg");
const img5 = require("./IMG_3788_F.jpg");

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: 'img1'
        }

        this.changePicture = this.changePicture.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.moveBackward = this.moveBackward.bind(this);
        this.isCheckedCheck = this.isCheckedCheck.bind(this);

        this.renderSlides = this.renderSlides.bind(this);

        this.images = {
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            img5: img5
        }
    }

    getCurrentButton(circle) {
        if(this.state.isChecked === circle.id) {
            return('current');
        }
        return('');
    }

    changePicture(e){
        this.setState({isChecked: e.target.id});
    }

    moveForward(e){
        if(this.state.isChecked[3] == 5){
            this.setState({ isChecked: 'img1' });
        } else {
            const nextImage = `img${parseInt(this.state.isChecked[3]) + 1}`;
            this.setState({ isChecked: nextImage })
        }
    }

    moveBackward(e){
        if(e.target.id[3] == 1){
            this.setState({ isChecked: 'img5' });
        } else {
            const previousImage = `img${parseInt(e.target.id[3] - 1)}`;
            this.setState({ isChecked: previousImage});
        }
    }

    isCheckedCheck(imageNum){
        if(this.state.isChecked == imageNum) {
            return(true);
        }
        return(false);
    }

    renderSlides() {
        return Object.keys(this.images).map(image => {
            let imageSrc = this.images[image];
            
            return(<div className={`slide ${image}`}>
                       <img src={imageSrc} alt="" />
                   </div>)
        })
    }

    render() {
        return(

            <div className="slideshow middle">
                <div className="slides">
                    <RadioButtonContainer images={this.images} isChecked={this.isCheckedCheck} changePicture={this.changePicture}/>
                    
                    <NavButtonContainer images={this.images} isChecked={this.isCheckedCheck}/>

                    {this.renderSlides()}

                    <div className="arrow-container">
                        <i className="arrow left" id={`${this.state.isChecked}`} onClick={this.moveBackward}></i>
                        <i className="arrow right" id={`${this.state.isChecked}`} onClick={this.moveForward}></i>
                    </div>

                </div>
            </div>
        );
    }
}

export default ImageSlider;