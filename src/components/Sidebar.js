import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Sidebar =  React.memo( props => {

  // verifies if routeName is the one active (in browser input)
  // function activeRoute(routeName) {
  //   return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  // }

  const { classes, color, logo, image, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {
        routes.map((prop, key) => {
          return (
            <NavLink
              to={prop.path}
              key={key}
            >
              <ListItem button>
                <ListItemText
                  primary={
                    props.rtlActive ? prop.rtlName : prop.name
                  }
                />
                </ListItem>
            </NavLink>
          )
        })
      }
    </List>
  );

  return (
    links
  )

});

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};


export default Sidebar;