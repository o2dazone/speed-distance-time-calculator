// import fetch from 'isomorphic-fetch';
import { CALCULATE_TIME } from 'constants';

export function calculateTime(distance, speed) {
  return {
    type: CALCULATE_TIME,
    distance: distance,
    speed: speed
  };
}
