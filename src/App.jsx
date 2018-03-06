/**
 * TODO: Time should probably be calculated on this level
 * and propagated down to child components.
 */

import React from 'react';
import AnalogClock from './components/AnalogClock';
import DigitsAndWords from './components/DigitsAndWords';
import GitHubber from './components/GitHubber';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { domReady: false };
  }
  componentDidMount() {
    window.addEventListener('load', () => this.setState({ domReady: true }));
  }
  render() {
    return (
      <div className={this.state.domReady ? 'app-outer-wrap' : 'app-outer-wrap waiting'}>
        <GitHubber />
        <div className="good-times">
          <div className="clock">
            <AnalogClock />
          </div>
          <DigitsAndWords />
        </div>
      </div>
    );
  }
}
export default App;

