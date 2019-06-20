import DrawCaptcha from './../captchas/DrawCaptcha';
import M from 'materialize-css';
import PictureCaptcha from './../captchas/PictureCaptcha';
import React from 'react';
import SheetsConnector from './../../helpers/SheetsConnector';
import { withStore } from '@spyna/react-store';

class Review extends React.Component {

    sheetsConnector = new SheetsConnector();

    componentWillMount() {
        let pCaptchaType = Math.floor(Math.random() * Math.floor(3));
        this.props.store.set("pCaptchaType", pCaptchaType);
        console.log(this.props.store.getState());
    }

    getCaptcha = () => {
        let type = <div></div>;
        let captchaType = this.props.store.get("pCaptchaType");
        if(captchaType === 1) {
            type = <DrawCaptcha />;   
        } else if(captchaType === 2) {
            type = <PictureCaptcha />;
        }
        return type;
    }

    onSubmitClick = () => {
        const pGameName = document.querySelector("#input-game").value;
        const pReviewText = document.querySelector("#textarea-review").value;

        if(pGameName === "") {
            M.toast({html: "Please enter a game name!"});
        }
        if(pReviewText === "") {
            M.toast({html: "Please enter a review text!"});
        }
        if(pGameName !== "" && pReviewText !== "") {
            this.props.store.set("pGameName", pGameName);
            this.props.store.set("pReviewText", pReviewText);
            console.log(this.props.store.getState());
            this.sheetsConnector.insertReviewBackupRow({
                key: this.props.store.get("pKey"),
                captcha_type: this.props.store.get("pCaptchaType"),
                game_name: this.props.store.get("pGameName"),
                review_text: this.props.store.get("pReviewText")
            });
            this.props.history.push("/self-assessment");
        }
    }

    render() {

        let Captcha = this.getCaptcha();

        return (
            <main>
                {Captcha}
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="input-game" type="text" />
                                <label htmlFor="input-game">Game</label>
                                <span className="helper-text">Name of the game your review is about</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea-review" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea-review">Review</label>
                                <span className="helper-text">Your review can be as long as you like</span>
                            </div>
                        </div>
                        <button className="btn blue-grey darken-2" onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default withStore(Review);