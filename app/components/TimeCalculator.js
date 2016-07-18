import React from 'react';
import DistanceDropdown from './DistanceDropdown';
import SpeedDropdown from './SpeedDropdown';

const TimeCalculator = ({ onCalculateTime, time }) => {
  return (
    <div>
      <h2>Time</h2>
      <div>
        <input type="text" defaultValue="60" placeholder="Distance" />
        <DistanceDropdown />
      </div>
      <div>
        <input type="text" defaultValue="60" placeholder="Speed" />
        <SpeedDropdown />
      </div>
      <a href="#" onClick={onCalculateTime}>Calculate</a>

      {time.speed && time.distance ? <p>{time.speed / time.distance}</p> : ''}
    </div>
  );
};

export default TimeCalculator;
