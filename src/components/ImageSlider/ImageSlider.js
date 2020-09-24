import React from 'react';
import './ImageSlider.css';

class ImageSlider extends React.Component {
    render() {
        return(
            <div className="slideshow middle">
                <div className="slides">
                    <input type="radio" name="r" id="r1" checked/>
                    <input type="radio" name="r" id="r2" />
                    <input type="radio" name="r" id="r3" />
                    <input type="radio" name="r" id="r4" />
                    <input type="radio" name="r" id="r5" />

                    <div className="slide slide1">
                        <img src={require("./IMG_3763_F.jpg")} alt="" />
                    </div>

                    <div className="slide">
                        <img src={require("./IMG_3766_F.jpg")} alt="" />
                    </div>

                    <div className="slide">
                        <img src={require("./IMG_3767_F.jpg")} alt="" />
                    </div>

                    <div className="slide">
                        <img src={require("./IMG_3780_F.jpg")} alt="" />
                    </div>

                    <div className="slide">
                        <img src={require("./IMG_3788_F.jpg")} alt="" />
                    </div>

                    <div className="navButtons">
                        <label for="r1" className="circle"></label>
                        <label for="r2" className="circle"></label>
                        <label for="r3" className="circle"></label>
                        <label for="r4" className="circle"></label>
                        <label for="r5" className="circle"></label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageSlider;