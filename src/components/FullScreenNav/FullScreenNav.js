import React from 'react';
import './FullScreenNav.css';

class FullScreenNav extends React.Component {
    render() {
        return(
                <nav id="fullscreen-nav">
                    <ul id="nav-list">
                        {this.props.renderItems}
                    </ul>
                </nav>
        );
    }
}

export default FullScreenNav;