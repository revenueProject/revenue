import { createAction } from 'redux-act';

export const saveTargetSuccess = createAction('saveTargetSuccess');

export const saveNewTarget = ({targetName, sum}) => (dispatch) => {
  db.insert({ targetName: targetName, type: 'Targets', sum: sum }, (err, newDoc) => {
    if (!err) dispatch(saveTargetSuccess(newDoc));
  });
};
