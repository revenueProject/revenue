import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Reports from '../layouts/Reports';
import { getMothsSuccess } from '../../actions/reports';


const getMonths = () => {
  const result = [];

  for (let i = 0; i < 12; i++) {
    const initialDate = moment().startOf('year');
    initialDate.add(i, 'months');
    result.push(initialDate);
  }

  return result;
};

class ReportsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getMothsSuccess(getMonths()));
  }

  render() {
    return (
      <Reports
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state.reports,
  };
};

export default connect(mapStateToProps)(ReportsContainer);
