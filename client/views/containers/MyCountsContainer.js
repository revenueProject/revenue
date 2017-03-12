import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyCounts from '../layouts/MyCounts';
import { saveNewCount, getCounts } from '../../actions/myCounts';


class MyCountsContainer extends Component {
  constructor() {
    super();
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.changeCountName = this.changeCountName.bind(this);
    this.saveCount = this.saveCount.bind(this);
    this.state = {
      isOpenDialog: false,
      countName: '',
    }
  }

  componentWillMount() {
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

  changeCountName(value) {
    this.setState({
      countName: value,
    });
  }

  saveCount() {
    this.props.dispatch(saveNewCount(this.state.countName));
    this.setState({
      isOpenDialog: false,
    });
  }

  render() {
    debugger;
    return (
      <MyCounts
        openDialog={this.openDialog}
        closeDialog={this.closeDialog}
        changeCountName={this.changeCountName}
        saveCount={this.saveCount}
        {...this.state}
        counts={this.props.myCounts}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myCounts: state.moCounts,
  };
};

export default connect(mapStateToProps)(MyCountsContainer);
