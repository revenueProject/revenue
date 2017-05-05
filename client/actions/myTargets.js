import { createAction } from 'redux-act';

export const saveTargetSuccess = createAction('saveTargetSuccess');
export const getTargetSuccess = createAction('getTargetSuccess');

export const saveNewTarget = ({targetName, sum}) => (dispatch) => {
  db.insert({ targetName: targetName, type: 'Targets', sum: sum }, (err, newDoc) => {
    if (!err) dispatch(saveTargetSuccess(newDoc));
  });
};

export const getTargets = () => (dispatch) => {
  db.find({ type: 'Targets' }, (err, res) => dispatch(getTargetSuccess(res)));
};

export const deleteTargetAction = (targetId) => (dispatch) => {
  db.remove({ _id: targetId }, () => {
    dispatch(getTargets());
  });
};
