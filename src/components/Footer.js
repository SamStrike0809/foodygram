import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "../css/footer.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Foodstagram
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  // const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {/* {title} */}
          <div className="footer2">
            <ul>
              <li>
                <a href="/">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <p>
                  <img
                    alt="logo"
                    src="https://img.icons8.com/plasticine/100/000000/noodles.png"
                    style={{ height: "70px" }}
                  />
                </p>
              </li>
            </ul>
          </div>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
