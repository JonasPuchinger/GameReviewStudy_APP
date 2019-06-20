import React from 'react';
import { withStore } from '@spyna/react-store';

class Index extends React.Component {

    onStartClick = () => {
        // navigate to /review with react-router api
        this.props.history.push("/review");
    }

    render() {

        return (
            <main>
                <div className="container center-align">
                    <p className="flow-text">
                        For the seminar "Advanced Usability Engineering", which is part of the masters in media informatics at the University of Regensburg, 
                        we explore how the quality of online video game reviews can be improved.
                        To do that, we analyse reviews of video games, written by you.
                        The review and all other data collected in this study will be collected anonymously and not be shared with third parties.
                        We ask of you to write a review of the last video game you played enough to write a somewhat exhaustive review of.
                        Write your review as you would normally write it, no need to be shy ;)
                        Length and format of the review is completely up to you.
                        You may take as much time as you need to write your review and answer the questions.
                        If you press START, you agree to us saving and analysing the information you enter in this study.
                        Have fun :)
                    </p>
                    <button className="btn blue-grey darken-2" onClick={this.onStartClick}>Start</button>
                </div>       
            </main>
        )
    }
}

export default withStore(Index);