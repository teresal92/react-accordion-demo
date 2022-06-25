import React from 'react';
import './App.css';
import { accordionData } from './utils/content'
import Accordion from './Accordion';

const App = () => {
  return (
    <>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
};

export default App;
