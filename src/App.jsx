import React, { Component } from 'react';
import AnalogClock from './components/AnalogClock';
import DigitsAndWords from './components/DigitsAndWords';
import GitHubber from './components/GitHubber';
import TopNav from './components/TopNav';
import CookieBanner, { Cookies } from 'react-cookie-banner';

class App extends Component {
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
    // const cookies = new Cookies();
    // {cookies.remove('2412cookiesAreCool')}
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
      <div>
        <CookieBanner
          disableStyle
          className="cookie-alert"
          cookie="2412cookiesAreCool"
          message="Denne siden bruker cookies (informasjonskapsler) for å funke som den skal. Du kan lese mere om dette under punktet 'Om cookies' i toppmenyen"
          buttonMessage="Greit!"
          onAccept={() => {}}
        />
        <div className={this.state.domReady ? 'app-outer-wrap' : 'app-outer-wrap waiting'}>
          <GitHubber />
          <TopNav />
          {this.state.second !== undefined
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
      </div>
    );
  }
}
export default App;
