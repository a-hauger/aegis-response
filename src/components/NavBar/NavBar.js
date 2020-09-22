import React from 'react';
import './NavBar.css';
import '../../containers/SiteNavWrapperContainer/SiteNavWrapperContainer';
import SiteNavWrapperContainer from '../../containers/SiteNavWrapperContainer/SiteNavWrapperContainer';

class NavBar extends React.Component {
    render() {
        return(
                <header id="site-header">
                    <SiteNavWrapperContainer />     
                </header>            
        );
    }
}

export default NavBar;