import * as actionTypes from 'constants';

export default function time(state = {}, action) {
  const { type, distance, speed } = action;
  switch (type) {
  case actionTypes.CALCULATE_TIME:
    return { ...state, distance: distance, speed: speed };
  default:
    return state;
  }
}
