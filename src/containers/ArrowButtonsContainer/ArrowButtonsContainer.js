import React from 'react';
import ArrowButtons from '../../components/ArrowButtons/ArrowButtons';

class ArrowButtonsContainer extends React.Component {
    constructor(props){
        super(props);

        this.getChecked = this.getChecked.bind(this);
        this.setChecked = this.setChecked.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.moveBackward = this.moveBackward.bind(this);
    }

    getChecked(){
        return(this.props.getChecked())
    }

    setChecked(imageNum){
        this.props.setChecked(imageNum);
    }

    moveForward(e){
        let imageNum;
        if(this.getChecked() === 'img5'){
            imageNum = 'img1';
        } else {
            imageNum = `img${parseInt(e.target.id[3])+1}`;
        }

        this.setChecked(imageNum);
    }

    moveBackward(e){
        let imageNum;
        if(this.getChecked() === 'img1'){
            imageNum = 'img5';
        } else {
            imageNum = `img${parseInt(e.target.id[3])-1}`;
        }

        this.setChecked(imageNum);
    }

    render(){
        return (
            <div className="arrow-container">
                <ArrowButtons direction="left" id={this.getChecked} onClick={this.moveBackward}/>
                <ArrowButtons direction="right" id={this.getChecked} onClick={this.moveForward}/>
            </div>
            )
    }
}

export default ArrowButtonsContainer;