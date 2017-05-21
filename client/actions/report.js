import { createAction } from 'redux-act';
import moment from 'moment';


export const getLogsSuccess = createAction('getLogsSuccess');

export const getLogs = (date) => (dispatch) => {
  db.find({ type: 'log' }, (err, res) => dispatch(getLogsSuccess(
    res.filter((item) => {
      const logDate = moment(item.timestamp).format('MM.YYYY');
      return logDate === date.format('MM.YYYY');
    }),
  )));
};
