import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider'

const img1 = require("./IMG_3763_F.jpg");
const img2 = require("./IMG_3766_F.jpg");
const img3 = require("./IMG_3767_F.jpg");
const img4 = require("./IMG_3780_F.jpg");
const img5 = require("./IMG_3788_F.jpg");

class ImageSliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: 'img1'
        }

        this.changePicture = this.changePicture.bind(this);
        this.getChecked = this.getChecked.bind(this);
        this.setChecked = this.setChecked.bind(this);

        this.images = {
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            img5: img5
        }
    }

    changePicture(e){
        alert("I'm here!")
        this.setState({isChecked: e.target.id});
    }

    setChecked(imageNum){
        this.setState({isChecked: imageNum});
    }

    getChecked(){
        return(this.state.isChecked);
    }

    render() {
        return <ImageSlider images={this.images} getChecked={this.getChecked} setChecked={this.setChecked} onChange={this.changePicture}/>
    }
}

export default ImageSliderContainer;