import React, { useState } from "react";
import Statistics from "./components/statistics.component";
import Button from "./components/button.component";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButtonGood = () => {
    setGood(good + 1);
  };
  const handleClickButtonNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickButtonBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" handleClick={handleClickButtonGood} />
      <Button text="neutral" handleClick={handleClickButtonNeutral} />
      <Button text="bad" handleClick={handleClickButtonBad} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
