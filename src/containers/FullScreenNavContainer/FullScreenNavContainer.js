import React from 'react';
import FullScreenNav from '../../components/FullScreenNav/FullScreenNav';

class FullScreenNavContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {currentPage: 'home'}

        this.pageLinks = {
            'Home': 'home',
            'About the Company': 'about_the_company',
            'About the Instructor': 'about_the_instructor',
            'Courses': 'courses',
            'Contact Us': 'contact_us'
        }

        this.getPageLink = this.getPageLink.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.renderPageLinkListItems = this.renderPageLinkListItems.bind(this);
    }

    getPageLink(pageLinkValue) {
        if(this.state.currentPage === pageLinkValue){
            return('active');
        }
        return('');
    }

    handlePageChange(pageLinkValue) {
        this.setState({currentPage: pageLinkValue})
    }

    renderPageLinkListItems() {
        return Object.keys(this.pageLinks).map(pageLink => {
            let pageLinkValue = this.pageLinks[pageLink];
            return(<li className={this.getPageLink(pageLinkValue)}
                    key={pageLinkValue}
                    onClick={this.handlePageChange.bind(this, pageLinkValue)}>
                        {pageLink}
                    </li>);
        })
    }

    render() {
        return(
            <FullScreenNav renderItems={this.renderPageLinkListItems()} />
        );
    }
}

export default FullScreenNavContainer;