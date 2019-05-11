import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import CertificateList from '../CertificateList';

const ExpiringTab = React.memo(props =>{
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('expiring', agent.Articles.feed, agent.Articles.feed());
  }

  return (
    <li className="nav-item">
      <a  href="#/"
          className={ props.tab === 'expiring' ? 'nav-link active' : 'nav-link' }
          onClick={clickHandler}>
        Expiring Certificates
      </a>
    </li>
  );
});

const ExpiredTab = React.memo(props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('expired', agent.Articles.feed, agent.Articles.feed());
  }

  return (
    <li className="nav-item">
      <a  href="#/"
          className={ props.tab === 'expired' ? 'nav-link active' : 'nav-link' }
          onClick={clickHandler}>
       Expired Certificates
      </a>
    </li>
  );
});

const HealthyTab = React.memo(props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('healthy', agent.Articles.feed, agent.Articles.feed());
  }

  return (
    <li className="nav-item">
      <a  href="#/"
          className={ props.tab === 'healthy' ? 'nav-link active' : 'nav-link' }
          onClick={clickHandler}>
        Healthy Certificates
      </a>
    </li>
  );
});

const mapStateToProps = state => ({
  ...state.certificateList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, payload) => dispatch({ type: CHANGE_TAB, tab, payload })
});

const MainView = React.memo(props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

          <ExpiringTab
            token={props.token}
            tab={props.tab}
            onTabClick={props.onTabClick} />

          <ExpiredTab tab={props.tab} onTabClick={props.onTabClick} />

          <HealthyTab tag={props.tag} />

        </ul>
      </div>

      <CertificateList
        certificates={props.certificates}
        loading={props.loading}
      />
    </div>
  );
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MainView));
