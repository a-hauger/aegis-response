import React from 'react';
import './ImageSlider.css';
import NavButtonContainer from '../../containers/NavButtonContainer/NavButtonContainer'
import RadioButtonContainer from '../../containers/RadioButtonContainer/RadioButtonContainer'
import ArrowButtonsContainer from '../../containers/ArrowButtonsContainer/ArrowButtonsContainer';
import SlidesContainer from '../../containers/SlidesContainer/SlidesContainer'

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
        this.isCheckedCheck = this.isCheckedCheck.bind(this);
        this.getChecked = this.getChecked.bind(this);
        this.setChecked = this.setChecked.bind(this);

        this.renderSlides = this.renderSlides.bind(this);

        this.images = {
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            img5: img5
        }
    }

    changePicture(e){
        this.setState({isChecked: e.target.id});
    }

    setChecked(imageNum){
        this.setState({isChecked: imageNum});
    }

    getChecked(){
        return(this.state.isChecked);
    }

    isCheckedCheck(imageNum){
        if(this.getChecked() == imageNum) {
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
                    <RadioButtonContainer images={this.images} getChecked={this.getChecked}/>
                    
                    <NavButtonContainer images={this.images} isChecked={this.getChecked}/>

                    <SlidesContainer images={this.images} />

                    <ArrowButtonsContainer getChecked={this.getChecked} setChecked={this.setChecked}/>

                </div>
            </div>
        );
    }
}

export default ImageSlider;