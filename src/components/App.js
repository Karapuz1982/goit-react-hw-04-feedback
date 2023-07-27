 import React from 'react';
import FeedbackWidget from './Feedback';
import { Container } from './Feedback.styled';


const App = () => {
  return (
 <Container>
      
 <FeedbackWidget good={0} neutral={0} bad={0} />
    </Container>
  );
};
export default App;