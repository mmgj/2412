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
 * TODO: This will have to be rewritten
 * in a way that doesn't mess up the string
 * value for the sake of formatting. Perhaps by
 * returning a string with a delimiter character?
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
  const hourKey = (minute >= 20) ? (parseInt(hour, 10) + 1) : parseInt(hour, 10);
  const minuteKey = parseInt(minute, 10);
  let jsx;
  switch (true) {
    case (minuteKey === 0):
      jsx = makeSpans(`akkurat ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey > 0 && minuteKey < 15):
      jsx = makeSpans(`${minuteStringsNB[minuteKey]} over ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey === 15):
      jsx = makeSpans(`kvart over ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey > 15 && minuteKey < 20):
      jsx = makeSpans(`${minuteStringsNB[minuteKey]} over ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey >= 20 && minuteKey < 30):
      jsx = makeSpans(`${minuteStringsNB[(30 - minuteKey)]} på`, `halv ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey === 30):
      jsx = makeSpans(`halv ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey > 30 && minuteKey < 45):
      jsx = makeSpans(`${minuteStringsNB[(minuteKey - 30)]} over`, `halv ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey === 45):
      jsx = makeSpans(`kvart på ${hourStringsNB[hourKey]}`);
      break;
    case (minuteKey > 45):
      jsx = makeSpans(`${minuteStringsNB[(60 - minuteKey)]} på ${hourStringsNB[hourKey]}`);
      break;
    default:
      jsx = makeSpans('...');
      break;
  }
  return jsx;
}
/**
 * makeDigits()
 * Prepend single-digit values with leading zero.
 */
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
    if (this.state.digits !== undefined) document.title = this.state.digits;
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
