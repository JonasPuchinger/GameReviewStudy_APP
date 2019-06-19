import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';

import AppFooter from './components/footer/Footer';
import AppHeader from './components/header/Header';
import Debriefing from './components/pages/Debriefing';
import Index from './components/pages/Index';
import React from 'react';
import Review from './components/pages/Review';
import SelfAssessment from './components/pages/SelfAssessment';
import { createStore } from '@spyna/react-store';

class App extends React.Component {

  render() {
    const RoutedHeader = withRouter(props => <AppHeader {...props} />);

    return(
      <Router>

          <div id="body-replacement">
          
              <RoutedHeader />

              <Route exact path="/" component={Index} />
              <Route path="/review" component={Review} />
              <Route path="/self-assessment" component={SelfAssessment} />
              <Route path="/debriefing" component={Debriefing} />

              <AppFooter />

          </div>

      </Router>
    );
  }  
}

// https://gist.github.com/gordonbrander/2230317
const createKey = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}

const initialValue = {
  // test if always the same for all pages
  pKey: createKey()
}

export default createStore(App, initialValue);