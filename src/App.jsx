import React from 'react';
import AnalogClock from './components/AnalogClock';
import DigitsAndWords from './components/DigitsAndWords';

const App = () =>
  (
    <div className="app-outer-wrap">
      <div className="good-times">
        <div className="clock">
          <AnalogClock />
        </div>
        <div className="textboxes">
          <DigitsAndWords />
        </div>
      </div>
    </div>
  );

export default App;

