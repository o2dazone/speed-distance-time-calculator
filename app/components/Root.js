import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import TimeCalculator from './TimeCalculator';
import DistanceCalculator from './DistanceCalculator';
import SpeedCalculator from './SpeedCalculator';

import { calculateTime } from 'actions/time';

import styles from 'styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.onCalculateTime = this.onCalculateTime.bind(this);
  }

  getInputVals(target) {
    console.log(target);
    const inputs = target.querySelectorAll('input');
    const vals = [];
    inputs.forEach(function(input) {
      if (input.value) {
        vals.push(input.value);
      }
    });
    return vals;
  }

  onCalculateTime(e) {
    const { calculateTime } = this.props;
    const vals = this.getInputVals(e.target.parentNode.parentNode);
    calculateTime(vals[0] || null, vals[1] || null);
  }

  render() {
    const { store, time } = this.props;

    return (
      <Provider store={store}>
        <div className={styles.container}>
          <h1>Time Distance Speed Calculator</h1>
          <TimeCalculator onCalculateTime={this.onCalculateTime} time={time} />
        </div>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    time: state.time
  };
}

export default connect(mapStateToProps, { calculateTime })(App);
