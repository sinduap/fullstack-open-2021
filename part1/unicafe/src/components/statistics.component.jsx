import React from "react";
import StatisticLine from "./statistic-line.component";

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <p>No feedback given</p>;
  }

  const all = good + neutral + bad;

  const average = ((good * 1 + neutral * 0 + bad * -1) / all).toFixed(2);

  const positive = `${(good / all).toFixed(2)} %`;

  return (
    <table>
      <tr>
        <StatisticLine text="good" value={good} />
      </tr>
      <tr>
        <StatisticLine text="neutral" value={neutral} />
      </tr>
      <tr>
        <StatisticLine text="bad" value={bad} />
      </tr>
      <tr>
        <StatisticLine text="all" value={all} />
      </tr>
      <tr>
        <StatisticLine text="average" value={average} />
      </tr>
      <tr>
        <StatisticLine text="positive" value={positive} />
      </tr>
    </table>
  );
};

export default Statistics;
