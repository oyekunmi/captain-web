import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = React.memo(props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li> */}

      </ul>
    );
  }
  return null;
});

const LoggedInView = React.memo(props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;Add Certificate
          </Link>
        </li> */}

        <li className="nav-item">
          <Link to="/certificate/add" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Add Certificate
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/vessel/add" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Add Vessel
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            Welcome, {props.currentUser.display_name}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
});

class Header extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;