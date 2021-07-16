import PropTypes from 'prop-types';
import s from 'components/FeedbackOptions/FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  const options = ['good', 'neutral', 'bad'];
  return (
    <div className={s.wrap}>
      {options.map(option => {
        return (
          <button
            className={s.button}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
