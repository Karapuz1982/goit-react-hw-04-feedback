
import React from 'react';
import PropTypes from 'prop-types';
import { Button, FeedbackContainer } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackContainer>
    
    {options.map((option) => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </FeedbackContainer>
);
FeedbackOptions.propTypes = {
  
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
