import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { VESSEL_PAGE_LOADED } from '../../constants/actionTypes';


const mapStateToProps = state => ({
  ...state.vessel,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: VESSEL_PAGE_LOADED, payload }),
});

class Vessel extends React.PureComponent {

  componentDidMount() {
    
    this.props.onLoad(Promise.all([
      agent.Vessels.get(this.props.match.params.id),
      agent.Certificates.byVessel(this.props.match.params.id),
    ]));

  }

  render() {
    if (!this.props.vessel) {
      return null;
    }

    return (
      <div>
        Vessel
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vessel)