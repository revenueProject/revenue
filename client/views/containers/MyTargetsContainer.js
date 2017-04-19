import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyTargets from '../layouts/MyTargets';
import { saveNewTarget } from '../../actions/myTargets';


class MyTargetsContainer extends Component {
  constructor() {
    super();
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.changeTargetName = this.changeTargetName.bind(this);
    this.changeSum = this.changeSum.bind(this);
    this.saveTarget = this.saveTarget.bind(this);
    this.state = {
      isOpenDialog: false,
      targetName: '',
      sum: '',
    };
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

  render() {
    return (
      <MyTargets
        openDialog={this.openDialog}
        closeDialog={this.closeDialog}
        changeTargetName={this.changeTargetName}
        changeSum={this.changeSum}
        saveTarget={this.saveTarget}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myTargets: state.myTargets,
  };
};

export default connect(mapStateToProps)(MyTargetsContainer);
