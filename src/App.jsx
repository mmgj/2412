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
    // Pause for loading fonts.
    window.addEventListener('DOMContentLoaded', () => this.setState({ domReady: true }));
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

