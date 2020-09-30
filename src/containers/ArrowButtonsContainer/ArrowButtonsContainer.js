import React from 'react';
import ArrowButtons from '../../components/ArrowButtons/ArrowButtons';

class ArrowButtonsContainer extends React.Component {
    constructor(props){
        super(props);

        this.id = this.props.getChecked();

        this.moveForward = this.moveForward.bind(this);
        this.moveBackward = this.moveBackward.bind(this);
    }

    moveForward(e){
        if(this.id === 'img5'){
            const imageNum = 'img1';
        } else {
            const imageNum = `img${e.target.id[3]+1}`;
        }
        this.props.setChecked(imageNum);
    }

    moveBackward(e){
        if(this.id === 'img1'){
            const imageNum = 'img5';
        } else {
            const imageNum = `img${e.target.id[3]-1}`;
        }
        this.props.setChecked(imageNum);
    }

    render(){
        return (
            <div className="arrow-container">
                <ArrowButtons direction="left" id={this.props.getChecked} onClick={this.moveBackward}/>
                <ArrowButtons direction="right" id={this.props.getChecked} onClick={this.moveForward}/>
            </div>
            )
    }
}

export default ArrowButtonsContainer;