import { createAction } from 'redux-act';

export const getCountSuccess = createAction('getCountSuccess');
export const getLogsSuccess = createAction('getLogsSuccess');

export const getCount = (countId) => (dispatch) => {
  db.findOne({ _id: countId }, (err, doc) => dispatch(getCountSuccess(doc)));
};

export const getLogs = (countId) => (dispatch) => {
  db.find({ type: 'log', count: countId }, (err, res) => dispatch(getLogsSuccess(res.sort((a, b) => {
    return b.timestamp - a.timestamp;
  }))));
};

export const updateCount = (count) => (dispatch) => {
  db.update({ _id: count._id }, count, () => dispatch(getCount(count._id)));
};

export const saveLog = (logItem) => (dispatch) => {
  db.insert(logItem, () => dispatch(getLogs(logItem.count)));
};

