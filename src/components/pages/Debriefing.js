import M from 'materialize-css';
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
            M.toast({html: "Email submitted!"});
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
                        <p>
                        If you are a student of Media Informatics at the University of Regensburg, and want to earn 0,5 VP for taking part in this study, 
                        please enter your student email address below and send an email with the subject "UR Game Review Study VP" to one of the following addresses.
                        </p>
                        <a href="mailto:jonas.puchinger@stud.uni-regensburg.de">Jonas Puchinger</a>
                        <br />
                        <a href="mailto:kevin.angermeyer@stud.uni-regensburg.de">Kevin Angermeyer</a>
                        <br />
                        <div className="row">
                            <div className="input-field col s6 offset-s3">
                                <input id="input-email" type="email" className="validate" />
                                <label htmlFor="input-email">Email</label>
                            </div>
                        </div>
                        <button className="btn blue-grey darken-2" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                    <div className="row">
                        <p>
                        If you are an Amazon Mechanical Turk Worker, here is your code:
                        </p>
                        <h4>617438952</h4>
                    </div>
                </div>       
            </main>
        )
    }
}

export default withStore(Debriefing);