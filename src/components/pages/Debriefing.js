import React from 'react';
import SheetsConnector from './../../helpers/SheetsConnector';
import { withStore } from '@spyna/react-store';

class Debriefing extends React.Component {

    sheetsConnector = new SheetsConnector();

    onSubmitClick = () => {
        const pEmail = document.querySelector("#input-email").value;

        if(pEmail !== "") {
            this.sheetsConnector.insertEmailRow({
                email: pEmail
            });
        }
    }
    
    render() {
        
        return (
            <main>
                <div className="container center-align">
                    <p className="flow-text">
                        Thank you very much for taking part in our study!
                        <br></br>
                        Your part is now done and you can close the browser window or tab.
                    </p>
                    <div className="row">
                        <p>If you want to get notified about the results of our study, please enter your email address below:</p>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="input-email" type="email" className="validate" />
                                <label for="input-email">Email</label>
                            </div>
                        </div>
                        <button className="btn blue-grey darken-2" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>       
            </main>
        )
    }
}

export default withStore(Debriefing);