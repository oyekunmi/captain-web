import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.PureComponent {
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
      items.push(<li key={index}>{item.name}</li>)
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
