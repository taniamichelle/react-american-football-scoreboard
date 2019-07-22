import React from 'react';

function Buttons(props) {
    const { homeScore, setHomeScore, awayScore, setAwayScore } = props;
    //console.log(props);
    return (
        <section className="buttons">
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                {/* //onClick is an attribute or property(prop) */}
                <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
                <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
                <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
            </div>
        </section>
    );
}

export default Buttons;