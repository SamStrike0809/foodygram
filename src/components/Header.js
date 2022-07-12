import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import '../css/header.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "sticky",
    top: "0",
    width: "100%",
    boxShadow: "0px 3px 10px -9px #000000",
  },
  logo: {
    height: "50px",
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: "Cookie",
    fontSize: "50px",
  },
  toolbarHeading: {
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontFamily: "Cookie",
    fontSize: "25px",
  },
  toolbarSubtitle: {
    fontSize: "22px",
    padding: "0px 32px",
    fontFamily: "Dancing Script",
  },
  
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <IconButton>
          <img
            className={classes.logo}
            alt="logo"
            src="https://img.icons8.com/plasticine/100/000000/noodles.png"
          />
        </IconButton>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link
            underline="none"
            href="/"
            color="inherit"
            className={classes.toolbarHeading}
          >
            {title}
          </Link>
        </Typography>
        {/* <IconButton> */}
          <Link
            underline="none"
            href="/AboutUs"
            color="inherit"
            className={classes.toolbarSubtitle}
          >
            About us
          </Link>
          {/* <SearchIcon /> */}
        {/* </IconButton> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
