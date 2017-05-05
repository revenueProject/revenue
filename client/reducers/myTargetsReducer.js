import { createReducer } from 'redux-act';
import { saveTargetSuccess, getTargetSuccess } from '../actions/myTargets';


const initialState = {
  targets: [],
};

export default createReducer({
  [saveTargetSuccess]: (state, result) => {
    return { ...state, targets: [...state.targets, result] };
  },
  [getTargetSuccess]: (state, result) => ({ ...state, targets: result }),
}, initialState);

