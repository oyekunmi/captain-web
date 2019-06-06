import React from 'react';
import { Link } from 'react-router-dom';

const Logo = React.memo(()=>{
  return (
    <div className="logo">Captain</div>
  )
});

const Menu = React.memo(props => {
  return (
    <ul className="l-grid">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/vessels">Vessels</Link></li>
    </ul>
  );
});


class Sidebar extends React.PureComponent {
  render() {
    return (
      <div id="sidebar">
        <Logo />
        <Menu />
      </div>
    );
  }
}

export default Sidebar;