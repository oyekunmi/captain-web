import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  LOAD_CERTIFICATES,
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,  
  token: state.common.token,
  vessels: state.common.vessels
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED }),
  loadCertificates: (vessel) =>
    dispatch({ type: LOAD_CERTIFICATES, payload: Promise.all([vessel, agent.Certificates.byVessel(vessel.id)]) }),
  
});

class Home extends React.PureComponent {

  constructor() {
    super();
    this.onVesselClicked = item => {
      this.props.loadCertificates(item);
    } 
  }

  componentDidMount() {
    this.props.onLoad( Promise.all([agent.Vessels.all()]) );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }


  render() {
   
    if(!this.props.vessels){
      return ("");
    }
    
    let items = [];
    this.props.vessels.forEach( (item, index)=>{
      items.push(
      <li key={index}>
          <a  href="#/" value={item.id} onClick={()=>this.onVesselClicked(item)}>
            {`${item.name}(${item.certificates_count})`}
          </a>
        {/* <a  href="#/" to={`/users/${item.id}`} activeClassName="active" value={item.id} onClick={this.onVesselClicked}>{item.name}</a> */}
      </li>

      )
    });

    return (
      <div className="home-page">

        <Banner token={this.props.token} appName={this.props.appName} />

        <div className="container page">
          <div className="row">
          
          <div className="col-md-3">
            <div className="sidebar">
              <p>Vessels</p>
              {items}
            </div>
          </div>
            
            <MainView />


          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
