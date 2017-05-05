import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyTargets from '../layouts/MyTargets';
import { saveNewTarget, getTargets, deleteTargetAction } from '../../actions/myTargets';
import { getCounts } from '../../actions/myCounts';


class MyTargetsContainer extends Component {
  constructor() {
    super();
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.changeTargetName = this.changeTargetName.bind(this);
    this.changeSum = this.changeSum.bind(this);
    this.saveTarget = this.saveTarget.bind(this);
    this.deleteTarget = this.deleteTarget.bind(this);
    this.state = {
      isOpenDialog: false,
      targetName: '',
      sum: '',
    };
  }

  componentWillMount() {
    this.props.dispatch(getTargets());
    this.props.dispatch(getCounts());
  }

  openDialog() {
    this.setState({
      isOpenDialog: true,
    });
  }

  closeDialog() {
    this.setState({
      isOpenDialog: false,
    });
  }

  changeTargetName(value) {
    this.setState({
      targetName: value,
    });
  }

  changeSum(value) {
    this.setState({
      sum: value,
    });
  }

  saveTarget() {
    this.props.dispatch(saveNewTarget({
      targetName: this.state.targetName,
      sum: this.state.sum,
    }));
    this.setState({
      isOpenDialog: false,
      countName: '',
    });
  }

  deleteTarget(targetId) {
    this.props.dispatch(deleteTargetAction(targetId));
  }

  render() {
    return (
      <MyTargets
        openDialog={this.openDialog}
        closeDialog={this.closeDialog}
        changeTargetName={this.changeTargetName}
        changeSum={this.changeSum}
        saveTarget={this.saveTarget}
        deleteTarget={this.deleteTarget}
        {...this.state}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myTargets: state.myTargets,
    moCounts: state.moCounts,
  };
};

export default connect(mapStateToProps)(MyTargetsContainer);
