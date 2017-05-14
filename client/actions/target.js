import { createAction } from 'redux-act';


export const getTargetSuccess = createAction('getTargetSuccess');

export const getTarget = (targetId) => (dispatch) => {
  db.findOne({ _id: targetId }, (err, doc) => dispatch(getTargetSuccess(doc)));
};

export const updateAttachment = (target) => (dispatch) => {
  db.update({ _id: target._id }, target, () => dispatch(getTarget(target._id)));
};