import React from 'react';
import NavButton from '../../components/NavButton/NavButton';

class NavButtonContainer extends React.Component{
    constructor(props){
        super(props);

        this.renderNavButtons = this.renderNavButtons.bind(this);
        this.setChecked = this.setChecked.bind(this);
        this.images = this.props.images;
    }

    setChecked(e){
        this.props.setChecked(e.target.id);
    }

    renderNavButtons() {
        return Object.keys(this.images).map(image=>{
            return (
                <NavButton key={image}
                           imageName={image} 
                           getChecked={this.props.getChecked() === image} 
                           setChecked={this.setChecked.bind(this)} />)
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