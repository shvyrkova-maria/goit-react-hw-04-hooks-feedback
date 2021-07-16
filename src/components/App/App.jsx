import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleIncreaseValue(option) {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  }

  function getTotalValue() {
    return [good, neutral, bad].reduce((total, value) => total + value);
  }

  function getPercentage() {
    return Math.round((good / total) * 100);
  }

  const total = getTotalValue();
  const percentage = getPercentage();

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={handleIncreaseValue} />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </>
  );
}
