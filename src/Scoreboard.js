import React from 'react';
import BottomRow from "./BottomRow";

//We have access to homeScore and awayScore in our props object because of line 18 in App.js.
function Scoreboard(props) {
    console.log(props)
    return (
        <section className="scoreboard">
            <div className="topRow">
                <div className="home">
                    <h2 className="home__name">Lions</h2>

                    {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                    <div className="home__score">{props.homeScore}</div>
                </div>
                <div className="timer">00:03</div>
                <div className="away">
                    <h2 className="away__name">Tigers</h2>
                    <div className="away__score">{props.awayScore}</div>
                </div>
            </div>
            <BottomRow />
        </section>
    );
}

export default Scoreboard;