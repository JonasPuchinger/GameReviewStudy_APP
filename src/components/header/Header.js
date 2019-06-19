import React from 'react';

class AppHeader extends React.Component {

    state = {
        currPageTitle: "Game Review Study"
    }

    componentWillMount() {
        const { pathname } = this.props.location;
        let pageTitle;
        if(pathname === "/") {
            pageTitle = "Game Review Study";
        } else if(pathname === "/self-assessment") {
            pageTitle = "Self Assessment";
        } else {
            pageTitle = pathname.charAt(1).toUpperCase() + pathname.substring(2);
        }
        this.setState({ currPageTitle: pageTitle })
    }

    render() {
        return (
            <header>
                <h3 className="center-align">{this.state.currPageTitle}</h3>
            </header>
        );
    }
}

export default AppHeader;