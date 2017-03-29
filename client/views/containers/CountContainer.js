import React, {Component} from 'react';
import { connect } from 'react-redux';
import CountLayout from '../layouts/Count';


class CountContainer extends Component {
    render() {
        return (
            <CountLayout />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    countSTate: state.count,
  };
};

export default connect(mapStateToProps)(CountContainer);