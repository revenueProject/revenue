import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Report from '../layouts/Report';
import { getLogs } from '../../actions/report';
import { getCounts } from '../../actions/myCounts';


class ReportsContainer extends Component {
  componentDidMount() {
    const date = moment().startOf('year').add(this.props.routeParams.month, 'months');
    this.props.dispatch(getLogs(date));
    this.props.dispatch(getCounts());
  }

  get logs() {
    const summary = { sum: 0, date: 'Итого' };
    const updateLogs = this.props.reportState.logs.map((log) => {
      const updateLog = { ...log };
      const count = this.props.myCounts.counts.find((item) => item._id === log.count);
      updateLog.count = (count && count.countName) || 'Счет удален';
      summary.sum = log.action === 'Пополнение' ? summary.sum + log.sum : summary.sum - log.sum;
      return updateLog;
    });

    updateLogs.push(summary);
    return updateLogs;
  }

  render() {
    return (
      <Report
        logs={this.logs}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myCounts: state.moCounts,
    reportState: state.reportState,
  };
};

export default connect(mapStateToProps)(ReportsContainer);
