//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';

import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //const [state, setState]
  const [homeScore, setHomeScore] = useState(0);
  //destructuring the homeScore array, which is the value of our variable (0)
  const [awayScore, setAwayScore] = useState(0);
  //destructuring the awayScore array, which is the value of our variable (0)
  return (
    <div className="container">
      {/* pass in homeScore as props; can call homeScore and awayScore keys (on left side of =) anything you want. 
      line below is the same as: {Scoreboard({homeScore: homeScore, awayScore: awayScore})}. Both lines are rendering (running) our component and 
      returning JSX. Scoreboard is the function we're running and the scores are our props (properties/attributes).*/}
      <Scoreboard homeScore={homeScore} awayScore={awayScore} />
      <Buttons homeScore={homeScore}
        awayScore={awayScore}
        setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
      />
    </div>
  );
}

export default App;

//We render our App component, which in turn renders our Scoreboard component that we've imported here and returns our updated values (scores).

//In the props tree structure, App is at the top and passes its states down to Scoreboard and Buttons