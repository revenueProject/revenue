import React, { Component } from 'react';
import { connect } from 'react-redux';
import Target from '../layouts/Target';
import { getCounts } from '../../actions/myCounts';
import { getTarget, updateAttachment } from '../../actions/target';
import { saveLog, updateCount } from '../../actions/count';


class TargetContainer extends Component {
  constructor() {
    super();
    this.changeField = this.changeField.bind(this);
    this.addAttachment = this.addAttachment.bind(this);
    this.removeAttachment = this.removeAttachment.bind(this);
    this.state = {
      countId: '',
      attachemnt: '',
    };
  }
  componentWillMount() {
    this.props.dispatch(getTarget(this.props.routeParams.targetId));
    this.props.dispatch(getCounts());
  }

  removeAttachment() {
    const attachemntIsExixt = this.props.target.target.attachments.find((attachemnt) =>
      attachemnt.count === this.state.countId);

    if (!attachemntIsExixt) return false;

    const attachemnts = this.props.target.target.attachments.map((attachemnt) => {
        if (attachemnt.count === this.state.countId && attachemnt.value > Number(this.state.attachemnt)) {
          attachemnt.value -= Number(this.state.attachemnt);
        };

        return attachemnt;
      });

      const target = { ...this.props.target.target, attachments: attachemnts };
      const count = this.getCount(this.props.myCounts.counts);
      const newCount = { ...count, balance: (count.balance + Number(this.state.attachemnt)) };
      const logItem = {
        count: count._id,
        sum: Number(this.state.attachemnt),
        comment: `Цель: ${this.props.target.target.targetName}`,
        date: new Date().toDateString(),
        action: 'Пополнение',
        type: 'log',
        timestamp: new Date().getTime(),
      };

    this.props.dispatch(updateCount(newCount));
    this.props.dispatch(saveLog(logItem));
    this.props.dispatch(updateAttachment(target));
    
  }

  addAttachment() {
    let attachemnts = [...this.props.target.target.attachments];
    const attachemntIsExixt = attachemnts.find((attachemnt) =>
      attachemnt.count === this.state.countId);
    if (!attachemntIsExixt) {
      attachemnts.push({
        count: this.state.countId,
        value: Number(this.state.attachemnt),
      });
    } else {
      attachemnts = this.props.target.target.attachments.map((attachemnt) => {
        if (attachemnt.count === this.state.countId) {
          attachemnt.value += Number(this.state.attachemnt);
        };

        return attachemnt;
      });
    }
    const target = { ...this.props.target.target, attachments: attachemnts };

    const count = this.getCount(this.props.myCounts.counts);
    const newCount = { ...count, balance: (count.balance - Number(this.state.attachemnt)) };
    if (Number(this.state.attachemnt) > count.balance) return;
    const logItem = {
      count: count._id,
      sum: Number(this.state.attachemnt),
      comment: `Цель: ${this.props.target.target.targetName}`,
      date: new Date().toDateString(),
      action: 'Траты',
      type: 'log',
      timestamp: new Date().getTime(),
    };
    this.props.dispatch(updateCount(newCount));
    this.props.dispatch(saveLog(logItem));
    this.props.dispatch(updateAttachment(target));
  }

  getCount(counts) {
    return counts.find((count) => count._id === this.state.countId);
  }

  changeField(field, value) {
    const stateObj = {};
    stateObj[field] = value;

    this.setState(stateObj);
  }

  render() {
    return (
      <Target
        {...this.props}
        {...this.state}
        changeField={this.changeField}
        addAttachment={this.addAttachment}
        removeAttachment={this.removeAttachment}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myCounts: state.moCounts,
    target: state.target,
  };
};

export default connect(mapStateToProps)(TargetContainer);
