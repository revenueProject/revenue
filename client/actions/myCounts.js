import { createAction } from 'redux-act';

export const saveCountSuccess = createAction('saveCountSuccess');
export const getCountsSuccess = createAction('getCountsSuccess');

export const saveNewCount = (countName) => (dispatch) => {
  db.insert({ countName: countName, type: 'Counts', balance: 0 }, (err, newDoc) => {
    if (!err) dispatch(saveCountSuccess(newDoc));
  });
};

export const getCounts = () => (dispatch) => {
  db.find({ type: 'Counts' }, (err, res) => dispatch(getCountsSuccess(res)));
};

export const deleteCountAction = (countId) => (dispatch) => {
  db.remove({ _id: countId }, () => {
    dispatch(getCounts());
  });
};
