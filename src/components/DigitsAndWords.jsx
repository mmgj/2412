import React from 'react';
import PropTypes from 'prop-types';
/**
 * makeSpans();
 * Creates spans around text to make it line-break
 * at specified points, for to make more pretty.
 */
function makeSpans(first, second = null) {
  const spans = second != null
    ? (<div><span className="unbreakable">{first}</span> <span className="unbreakable">{second}</span></div>)
    : (<span className="unbreakable">{first}</span>);
  return spans;
}

/**
 * makeWords();
 * Big old string-voodoo function to spell out
 * time like a true nord.
 */
function makeWords(hour, minute) {
  const hourStringsNB = {
    0: 'tolv',
    1: 'ett',
    2: 'to',
    3: 'tre',
    4: 'fire',
    5: 'fem',
    6: 'seks',
    7: 'sju',
    8: 'åtte',
    9: 'ni',
    10: 'ti',
    11: 'elleve',
    12: 'tolv',
    13: 'ett',
    14: 'to',
    15: 'tre',
    16: 'fire',
    17: 'fem',
    18: 'seks',
    19: 'sju',
    20: 'åtte',
    21: 'ni',
    22: 'ti',
    23: 'elleve',
    24: 'tolv',
  };
  const minuteStringsNB = {
    0: '',
    1: 'ett',
    2: 'to',
    3: 'tre',
    4: 'fire',
    5: 'fem',
    6: 'seks',
    7: 'sju',
    8: 'åtte',
    9: 'ni',
    10: 'ti',
    11: 'elleve',
    12: 'tolv',
    13: 'tretten',
    14: 'fjorten',
    15: 'kvart',
    16: 'seksten',
    17: 'søtten',
    18: 'atten',
    19: 'nitten',
  };
  const betterHour = (minute >= 20) ? (parseInt(hour, 10) + 1) : parseInt(hour, 10);
  const betterMinute = parseInt(minute, 10);
  let jsx;
  switch (true) {
    case (betterMinute === 0):
      jsx = makeSpans(`akkurat ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute > 0 && betterMinute < 15):
      jsx = makeSpans(`${minuteStringsNB[betterMinute]} over ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute === 15):
      jsx = makeSpans(`kvart over ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute > 15 && betterMinute < 20):
      jsx = makeSpans(`${minuteStringsNB[betterMinute]} over ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute >= 20 && betterMinute < 30):
      jsx = makeSpans(`${minuteStringsNB[(30 - betterMinute)]} på`, `halv ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute === 30):
      jsx = makeSpans(`halv ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute > 30 && betterMinute < 45):
      jsx = makeSpans(`${minuteStringsNB[(betterMinute - 30)]} over`, `halv ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute === 45):
      jsx = makeSpans(`kvart på ${hourStringsNB[betterHour]}`);
      break;
    case (betterMinute > 45):
      jsx = makeSpans(`${minuteStringsNB[(60 - betterMinute)]} på ${hourStringsNB[betterHour]}`);
      break;
    default:
      jsx = makeSpans('...');
      break;
  }
  return jsx;
}

function makeDigits(hour, minute) {
  const hourFormatted = hour < 10 ? `0${hour}` : hour;
  const minutesFormatted = minute < 10 ? `0${minute}` : minute;
  return `${hourFormatted}:${minutesFormatted}`;
}

class DigitsAndWords extends React.Component {
  constructor(props) {
    super(props);
    const { hour, minute } = this.props;
    this.state = {
      digits: makeDigits(hour, minute),
      words: makeWords(hour, minute),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { hour, minute } = nextProps;
    const digits = makeDigits(hour, minute);
    const words = makeWords(hour, minute);
    this.setState({
      digits,
      words,
    });
  }

  render() {
    return (
      <div className="textboxes">
        <div className="digits">{this.state.digits && this.state.digits}</div>
        <div className="words">{this.state.words && this.state.words}</div>
      </div>
    );
  }
}

DigitsAndWords.propTypes = {
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
};

export default DigitsAndWords;
