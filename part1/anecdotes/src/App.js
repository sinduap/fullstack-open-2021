import React, { useState } from "react";
import Button from "./components/button.component";
import Content from "./components/content.component";
import HighestRated from "./components/highest-rated.component";
import VotePoints from "./components/vote-points.component";
import { generateRandomNumber } from "./helpers";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoint] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const handleSelect = () => {
    setSelected(generateRandomNumber(anecdotes.length));
  };

  const handleVote = (selected) => {
    setPoint({ ...points, [selected]: points[selected] + 1 });
  };

  const handleClick = (cbFunc, selected) => cbFunc(selected);

  const getHighestRatedIndex = () => {
    let highest = 0;
    let anecdoteIndex = 0;
    for (let key in points) {
      if (points[key] > highest) {
        highest = points[key];
        anecdoteIndex = key;
      }
    }
    return anecdoteIndex;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Content anecdote={anecdotes[selected]} />
      <VotePoints point={points[selected]} />
      <Button
        text="vote"
        handleClick={() => handleClick(handleVote, selected)}
      />
      <Button text="next" handleClick={() => handleClick(handleSelect)} />
      <h1>Anecdote with most voted</h1>
      <HighestRated anecdote={anecdotes[getHighestRatedIndex()]} />
    </div>
  );
};

export default App;
