import M from 'materialize-css';
import React from 'react';
import SheetsConnector from './../../helpers/SheetsConnector';
import { withStore } from '@spyna/react-store';

class SelfAssessment extends React.Component {

    sheetsConnector = new SheetsConnector();

    componentDidMount() {
        let datepicker = document.querySelector(".datepicker");
        M.Datepicker.init(datepicker, {
            format: "dd.mm.yyyy"
        });
        let rangeInputs = document.querySelectorAll("input[type=range]");
        M.Range.init(rangeInputs);
    }

    render() {
        
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <p className="flow-text">
                            At the end of this study, we have a few more questions about you.
                            Please answer them truthfully and completely.
                            Take as much time as you need to fill out these questions.
                            Remember, all of this data will be stored anonymously and securely, no third parties will have access to them.
                        </p>
                        <div className="row">
                            <h5>What gender do you identify as?</h5>
                            <p>
                                <label>
                                    <input name="gender" type="radio" />
                                    <span>Male</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="gender" type="radio" />
                                    <span>Female</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="gender" type="radio"  />
                                    <span>Other</span>
                                </label>
                            </p>
                        </div>
                        <div className="row">
                            <h5>How old are you?</h5>
                            <div className="input-field col s12">
                                <input id="input-age" type="text" className="datepicker" />
                                <label htmlFor="input-age">Date of Birth</label>
                            </div>
                        </div>
                        <div className="row">
                            <h5>What job do you currently have? (If you are a student, please state your field of study)</h5>
                            <div className="input-field col s12">
                                <input id="input-job" type="text" />
                                <label htmlFor="input-job">Occupation/Job</label>
                            </div>
                        </div>
                        <div className="row">
                            <h5>How often do you write video game reviews?</h5>
                            <p>
                            <label>
                                <input name="review-experience" type="radio" />
                                <span>Never</span>
                            </label>
                            </p>
                            <p>
                                <label>
                                    <input name="review-experience" type="radio" />
                                    <span>Once</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="review-experience" type="radio"  />
                                    <span>Once a year</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="review-experience" type="radio" />
                                    <span>Monthly</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="review-experience" type="radio"  />
                                    <span>Weekly</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="review-experience" type="radio"  />
                                    <span>Daily</span>
                                </label>
                            </p>
                            </div>
                        <div className="row">
                            <h5>How many hours (on average) a week do you play video games?</h5>
                            <div className="input-field col s12">
                                <input id="input-hours" type="number" />
                                <label htmlFor="input-hours">Hours</label>
                            </div>
                        </div>
                        <div className="row">
                            <h5>How much do you agree wit the following statement:</h5>
                            <h5>I would describe myself as a hardcore gamer. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p class="range-field">
                                <input type="range" id="input-gamer-type" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree wit the following statement:</h5>
                            <h5>I like the game I just reviewed. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p class="range-field">
                                <input type="range" id="input-game-attitude" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree wit the following statement:</h5>
                            <h5>The tone of my review was friendly. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p class="range-field">
                                <input type="range" id="input-review-tone" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree wit the following statement:</h5>
                            <h5>My review was analytical. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p class="range-field">
                                <input type="range" id="input-review-analytical" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree wit the following statement:</h5>
                            <h5>My review was takes into account what other players might think about the game. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p class="range-field">
                                <input type="range" id="input-review-social" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree wit the following statement:</h5>
                            <h5>My review was authentic and honest. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p class="range-field">
                                <input type="range" id="input-review-authenticity" min="1" max="7" />
                            </p>
                        </div>
                        <button className="btn blue-grey darken-2" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>       
            </main>
        )
    }
}

export default withStore(SelfAssessment);