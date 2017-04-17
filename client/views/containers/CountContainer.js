import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountLayout from '../layouts/Count';
import { getCount, updateCount, saveLog, getLogs } from '../../actions/count';


class CountContainer extends Component {
  constructor() {
    super();
    this.changeField = this.changeField.bind(this);
    this.changeBalance = this.changeBalance.bind(this);
    this.state = {
      sum: '',
      comment: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(getCount(this.props.routeParams.countId));
    this.props.dispatch(getLogs(this.props.routeParams.countId));
  }

  changeField(value, field) {
    const valueObj = {};
    valueObj[field] = value;

    this.setState(valueObj);
  }

  changeBalance(action) {
    const { sum, comment } = this.state;
    const count = this.props.countSTate.count;

    if (!sum || !comment) return;

    if (action === 'sub') {
      if (Number(sum) > count.balance) return;
      const newCount = { ...count, balance: (count.balance - Number(sum)) };
      const logItem = {
        count: count._id,
        sum: Number(sum),
        comment: comment,
        date: new Date().toDateString(),
        action: 'Траты',
        type: 'log',
        timestamp: new Date().getTime(),
      };
      this.props.dispatch(updateCount(newCount));
      this.props.dispatch(saveLog(logItem));
    } else {
      const newCount = { ...count, balance: (count.balance + Number(sum)) };
      const logItem = {
        count: count._id,
        sum: Number(sum),
        comment: comment,
        date: new Date().toDateString(),
        action: 'Пополнение',
        type: 'log',
        timestamp: new Date().getTime(),
      };
      this.props.dispatch(updateCount(newCount));
      this.props.dispatch(saveLog(logItem));
    }

    this.setState({
      sum: '',
      comment: '',
    });
  }

  render() {
    return (
      <CountLayout
        changeField={this.changeField}
        changeBalance={this.changeBalance}
        {...this.props}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countSTate: state.count,
  };
};

export default connect(mapStateToProps)(CountContainer);
