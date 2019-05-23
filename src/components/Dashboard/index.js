import React from 'react';
import Sidebar from './../Sidebar';
import routes from './../../routes';

const Dashboard =  React.memo(props => {
  return (
    <Sidebar
        routes={routes}
        logoText={"Creative Tim"}
        // logo={logo}
        // image={this.state.image}
        // handleDrawerToggle={this.handleDrawerToggle}
        // open={this.state.mobileOpen}
        color={props.color}
        // {...rest}
      />
  );
});

export default Dashboard;