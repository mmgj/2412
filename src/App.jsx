/**
 * TODO: Time should probably be calculated on this level
 * and propagated down to child components.
 */

import React from 'react';
import AnalogClock from './components/AnalogClock';
import DigitsAndWords from './components/DigitsAndWords';
import GitHubber from './components/GitHubber';

const App = () =>
  (
    <div className="app-outer-wrap">
      <GitHubber />
      <div className="good-times">
        <div className="clock">
          <AnalogClock />
        </div>
        <DigitsAndWords />
      </div>
    </div>
  );

export default App;

