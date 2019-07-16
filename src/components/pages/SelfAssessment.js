import M from 'materialize-css';
import React from 'react';
import SheetsConnector from './../../helpers/SheetsConnector';
import { withStore } from '@spyna/react-store';

class SelfAssessment extends React.Component {

    sheetsConnector = new SheetsConnector();

    componentDidMount() {
        let datepicker = document.querySelector(".datepicker");
        M.Datepicker.init(datepicker, {
            format: "dd.mm.yyyy",
            defaultDate: new Date(2000, 1, 1),
            yearRange: 20
        });
        let rangeInputs = document.querySelectorAll("input[type=range]");
        M.Range.init(rangeInputs);
    }

    onSubmitClick = () => {
        const pGender = (document.querySelector("input[name='gender']:checked") === null) ? "Not given" : document.querySelector("input[name='gender']:checked").nextSibling.innerText;
        const pBirthdate = (document.querySelector("#input-age").value === "") ? "Not given" : document.querySelector("#input-age").value;
        const pJob = (document.querySelector("#input-job").value === "") ? "Not given" : document.querySelector("#input-job").value;
        const pReviewExperience = (document.querySelector("input[name='review-experience']:checked") === null) ? "Not given" : document.querySelector("input[name='review-experience']:checked").nextSibling.innerText;
        const pHours = (document.querySelector("#input-hours").value === "") ? "Not given" : document.querySelector("#input-hours").value;
        const pGamerType = document.querySelector("#input-gamer-type").value;
        const pGamePresentation = document.querySelector("#input-game-presentation").value;
        const pGameDesign = document.querySelector("#input-game-gamedesign").value;
        const pGameStory = document.querySelector("#input-game-story").value;
        const pGameBalance = document.querySelector("#input-game-balance").value;
        const pGameExtent = document.querySelector("#input-game-extent").value;
        const pGameAttitude = document.querySelector("#input-game-attitude").value;
        const pReviewTone = document.querySelector("#input-review-tone").value;
        const pReviewAnalytical = document.querySelector("#input-review-analytical").value;
        const pReviewSocial = document.querySelector("#input-review-social").value;
        const pReviewAuthenticity = document.querySelector("#input-review-authenticity").value;

        this.sheetsConnector.insertQuestionsBackupRow({
            key: this.props.store.get("pKey"),
            gender: pGender,
            birthday: pBirthdate,
            job: pJob,
            review_experience: pReviewExperience,
            gaming_hours: pHours,
            gamer_type: pGamerType,
            game_presentation: pGamePresentation,
            game_design: pGameDesign,
            game_story:	pGameStory,
            game_balance: pGameBalance,
            game_extent: pGameExtent,
            game_attitude: pGameAttitude,
            review_tone: pReviewTone,
            review_analytical: pReviewAnalytical,
            review_social: pReviewSocial,
            review_authenticity: pReviewAuthenticity
        });

        this.sheetsConnector.insertRow({
            key: this.props.store.get("pKey"),
            captcha_type: this.props.store.get("pCaptchaType"),
            game_name: this.props.store.get("pGameName"),
            review_text: this.props.store.get("pReviewText"),
            gender: pGender,
            birthday: pBirthdate,
            job: pJob,
            review_experience: pReviewExperience,
            gaming_hours: pHours,
            gamer_type: pGamerType,
            game_presentation: pGamePresentation,
            game_design: pGameDesign,
            game_story:	pGameStory,
            game_balance: pGameBalance,
            game_extent: pGameExtent,
            game_attitude: pGameAttitude,
            review_tone: pReviewTone,
            review_analytical: pReviewAnalytical,
            review_social: pReviewSocial,
            review_authenticity: pReviewAuthenticity
        });
        
        this.props.history.push("/debriefing");
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
                            <h5>How much do you agree with the following statement:</h5>
                            <h5>I would describe myself as a hardcore gamer. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p className="range-field">
                                <input type="range" id="input-gamer-type" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How would you rate the presentation of the game you just reviewed? (0 = Very bad. 5 = Very good.)</h5>
                            <span className="helper-text">Presentation = Graphics, Sound, Animations, Effects, ...</span>
                            <p className="range-field">
                                <input type="range" id="input-game-presentation" min="0" max="5" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How would you rate the gamedesign of the game you just reviewed? (0 = Very bad. 5 = Very good.)</h5>
                            <span className="helper-text">Gamedesign = Game mechanics, engine, game idea, innovation, ...</span>
                            <p className="range-field">
                                <input type="range" id="input-game-gamedesign" min="0" max="5" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How would you rate the balance of the game you just reviewed? (0 = Very bad. 5 = Very good.)</h5>
                            <span className="helper-text">Balance = Fairness of the game, strength/weakness of items, players, ...</span>
                            <p className="range-field">
                                <input type="range" id="input-game-balance" min="0" max="5" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How would you rate the story/atmosphere of the game you just reviewed? (0 = Very bad. 5 = Very good.)</h5>
                            <span className="helper-text">Story/Atmosphere = Characters, plot, scenery, worldbuilding, ...</span>
                            <p className="range-field">
                                <input type="range" id="input-game-story" min="0" max="5" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How would you rate the extent of the game you just reviewed? (0 = Very bad. 5 = Very good.)</h5>
                            <span className="helper-text">Extent = Amount of content in the game, length of campaigns, replayability, ...</span>
                            <p className="range-field">
                                <input type="range" id="input-game-extent" min="0" max="5" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree with the following statement:</h5>
                            <h5>I like the game I just reviewed. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p className="range-field">
                                <input type="range" id="input-game-attitude" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree with the following statement:</h5>
                            <h5>The tone of my review is friendly. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <span className="helper-text">Friendly refers only to the tone and language of your review, not to the points you made in it.</span>
                            <p className="range-field">
                                <input type="range" id="input-review-tone" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree with the following statement:</h5>
                            <h5>My review is analytical. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p className="range-field">
                                <input type="range" id="input-review-analytical" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree with the following statement:</h5>
                            <h5>My review takes into account what other players might think about the game. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p className="range-field">
                                <input type="range" id="input-review-social" min="1" max="7" />
                            </p>
                        </div>
                        <div className="row">
                            <h5>How much do you agree with the following statement:</h5>
                            <h5>My review is authentic and honest. (1 = Do not agree at all. 7 = Fully agree.)</h5>
                            <p className="range-field">
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