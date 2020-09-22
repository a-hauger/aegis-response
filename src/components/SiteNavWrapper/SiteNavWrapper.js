import React from 'react';
import './SiteNavWrapper.css';
import FullScreenNavContainer from '../../containers/FullScreenNavContainer/FullScreenNavContainer';

class SiteNavWrapper extends React.Component {
    render() {
        return(
            <div id="site-nav-wrapper">
                <p>Aegis Response</p>
                <FullScreenNavContainer />
            </div>
        )
    }
}

export default SiteNavWrapper;