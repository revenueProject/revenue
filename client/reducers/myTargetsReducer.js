import { createReducer } from 'redux-act';
import { saveTargetSuccess } from '../actions/myTargets';


const initialState = {
  targets: [],
};

export default createReducer({
  [saveTargetSuccess]: (state, result) => {
    return { ...state, targets: [...state.targets, result] };
  },
}, initialState);

