import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import TimeCalculator from './TimeCalculator';
import DistanceCalculator from './DistanceCalculator';
import SpeedCalculator from './SpeedCalculator';

import styles from 'styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className={styles.container}>
          <TimeCalculator />
          <DistanceCalculator />
          <SpeedCalculator />
        </div>
      </Provider>
    );
  }
}

export default connect()(App);
