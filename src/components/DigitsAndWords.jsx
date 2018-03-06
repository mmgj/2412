import React from 'react';
import moment from 'moment';

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
 * makeNordTime();
 * Big old string-voodoo function to spell out
 * time like a true nord.
 * @param {*} hrs
 * @param {*} mins
 */
function makeNordTime(hrs, mins) {
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
  const hour = (mins >= 20) ? (parseInt(hrs, 10) + 1) : parseInt(hrs, 10);
  const minutes = parseInt(mins, 10);
  let jsx;
  switch (true) {
    case (minutes === 0):
      jsx = makeSpans(`akkurat ${hourStringsNB[hour]}`);
      break;
    case (minutes > 0 && minutes < 15):
      jsx = makeSpans(`${minuteStringsNB[minutes]} over ${hourStringsNB[hour]}`);
      break;
    case (minutes === 15):
      jsx = makeSpans(`kvart over ${hourStringsNB[hour]}`);
      break;
    case (minutes > 15 && minutes < 20):
      jsx = makeSpans(`${minuteStringsNB[minutes]} over ${hourStringsNB[hour]}`);
      break;
    case (minutes >= 20 && minutes < 30):
      jsx = makeSpans(`${minuteStringsNB[(30 - minutes)]} på`, `halv ${hourStringsNB[hour]}`);
      break;
    case (minutes === 30):
      jsx = makeSpans(`halv ${hourStringsNB[hour]}`);
      break;
    case (minutes > 30 && minutes < 45):
      jsx = makeSpans(`${minuteStringsNB[(minutes - 30)]} over`, `halv ${hourStringsNB[hour]}`);
      break;
    case (minutes === 45):
      jsx = makeSpans(`kvart på ${hourStringsNB[hour]}`);
      break;
    case (minutes > 45):
      jsx = makeSpans(`${minuteStringsNB[(60 - minutes)]} på ${hourStringsNB[hour]}`);
      break;
    default:
      jsx = makeSpans('...');
      break;
  }
  return jsx;
}

class DigitsAndWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moTime: undefined,
      strTime: undefined,
    };
    this.updateClocks = this.updateClocks.bind(this);
  }

  componentDidMount() {
    this.updateClocks();
    setInterval(this.updateClocks, 1000);
  }

  updateClocks() {
    const mo = moment();
    const str = makeNordTime(mo.format('hh'), mo.format('mm'));
    this.setState({
      moTime: mo.format('HH:mm'),
      strTime: str,
    });
    document.title = this.state.moTime;
  }

  render() {
    return (
      <div className="textboxes">
        <div className="digits">{this.state.moTime && this.state.moTime}</div>
        <div className="words">{this.state.strTime && this.state.strTime}</div>
      </div>
    );
  }
}

export default DigitsAndWords;
