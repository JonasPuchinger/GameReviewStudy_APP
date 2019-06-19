import React from 'react';

class AppFooter extends React.Component {

    render() {
        return (
            <footer className="page-footer blue-grey darken-2">
                <div className="footer-copyright">
                    <div className="container">
                    © 2019 <a className="grey-text text-lighten-4" href="mailto:jonas.puchinger@stud.uni-regensburg.de">Jonas Puchinger</a> & <a className="grey-text text-lighten-4" href="mailto:kevin.angermeyer@stud.uni-regensburg.de">Kevin Angermeyer</a>
                    <a className="grey-text text-lighten-4 right" href="https://www.uni-regensburg.de/">University of Regensburg</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default AppFooter;