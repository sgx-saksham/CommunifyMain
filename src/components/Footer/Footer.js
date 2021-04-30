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
              <a href="#Docs" className={classes.block}>
                Docs
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a src="#About" className={classes.block}>
                About
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Channels" className={classes.block}>
                Channels
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Communify" className={classes.block}>
                Community
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            <a
              href="https://reactjs.org/tutorial/tutorial.html"
              target="_blank"
              className={classes.a}
            >
              Take the tutorial
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
