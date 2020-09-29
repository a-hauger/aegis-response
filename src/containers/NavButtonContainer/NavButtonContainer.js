import React from 'react';
import NavButton from '../../components/NavButton/NavButton';

class NavButtonContainer extends React.Component{
    constructor(props){
        super(props);

        this.renderNavButtons = this.renderNavButtons.bind(this);

        this.images = this.props.images;
    }


    renderNavButtons() {
        return Object.keys(this.images).map(image=>{
            return <NavButton imageName={image} isChecked={this.props.isChecked} />
        });
    }

    render() {
        return (
            <div className="navButtons">
                {this.renderNavButtons()}
            </div>)
    }
}

export default NavButtonContainer;