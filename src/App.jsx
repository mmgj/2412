/**
 * TODO: A bit of a Franken-app with the clock-component and
 * text-component both running their own logic to fetch and display
 * time. Very much not DRY. Rewriting this to do the calculating on
 * this level and prop'ing it down to display components should
 * probably be the next on the list.
 */

import React from 'react';
import AnalogClock from './components/AnalogClock';
import DigitsAndWords from './components/DigitsAndWords';
import GitHubber from './components/GitHubber';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domReady: false,
      hour: undefined,
      minute: undefined,
      second: undefined,
    };
    this.updateClocks = this.updateClocks.bind(this);
  }

  componentDidMount() {
    // FIXME: This is probably not necessary anymore. Try axing this in next review.
    window.addEventListener('load', () => this.setState({ domReady: true }));
    this.updateClocks();
    setInterval(this.updateClocks, 1000);
  }
  updateClocks() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.setState({
      hour,
      minute,
      second,
    });
  }

  render() {
    const { hour, minute, second } = this.state;
    return (
      <div className={this.state.domReady ? 'app-outer-wrap' : 'app-outer-wrap waiting'}>
        <GitHubber />
        {this.state.hour && this.state.minute
        ?
          <div className="good-times">
            <div className="clock-holder">
              <AnalogClock hour={hour} minute={minute} second={second} />
            </div>
            <DigitsAndWords hour={hour} minute={minute} />
          </div>
        : ''
        }
      </div>
    );
  }
}
export default App;

