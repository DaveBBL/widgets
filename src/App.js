import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end Javascript framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'By creating reusable components.'
  }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <Accordion 
        items={items}
      />
    </div>
  );
};