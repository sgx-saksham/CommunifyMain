/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/Communify/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#Communify" className={classes.block}>
                Communify
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Communify" className={classes.block}>
                Communify
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Communify" className={classes.block}>
                Communify
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Communify" className={classes.block}>
                Communify
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            <a
              href="https://www.linkedin.com/in/saksham-gupta-9573b31a3/"
              target="_blank"
              className={classes.a}
            >
              SGX_Saksham is at the code
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
