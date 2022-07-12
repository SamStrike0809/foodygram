import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPostContent: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    marginBottom: "5px",
    marginTop: "-12px",
    maxWidth: "540px",
    width: "calc(100% - 2px)",
    minWidth: "326px",
    backgroundColor: "white",
    border: "1px solid rgb(219,219,219)",
    borderRadius: "20px 20px 3px 3px",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 2),
    },
  },
  mainPost: {
    margin: "40px 40px",
    "@media (max-width: 480px)": {
      width: "auto",
      margin: "0px",
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <div className={classes.mainPost}>
      <div className={classes.mainFeaturedPostContent}>
        <h3 style={{ display: "inline" }}>{post.custom_text || "Food"}</h3>
        <p style={{ display: "inline", paddingTop: "5px" }}>
          <i style={{ paddingRight: "3px" }} class="fas fa-map-marker-alt"></i>
          {post.tags || "Location"}
        </p>
      </div>
      <div className={classes.embedpost}>{ReactHtmlParser(post.embed_url)}</div>
    </div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
