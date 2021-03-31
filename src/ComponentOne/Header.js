import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import MenuIcon from "@material-ui/icons/Menu";
// import logo from "../logo.svg";
import Fade from "@material-ui/core/Fade";
// import Header from "./Header";

const styles = (theme) => ({
  // colour: { color: "#000000" },
  root: {
    backgroundColor: "transparent",
    color: "#000000",
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: "transparent",
});
const ScrolledAppBar = withStyles(styles)(
  class extends Component {
    state = {
      scrolling: false,
      scrollTop: 0,
    };
    onScroll = (e) => {
      this.setState((state) => ({
        scrollTop: e.target.documentElement.scrollTop,
        scrolling: e.target.documentElement.scrollTop > state.scrollTop,
      }));
    };
    shouldComponentUpdate(props, state) {
      return this.state.scrolling !== state.scrolling;
    }
    componentDidMount() {
      window.addEventListener("scroll", this.onScroll);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    }
    render() {
      const { classes } = this.props;
      return (
        <Fade in={!this.state.scrolling}>
          <AppBar>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <Button>
                  <img src={logo} className="App-logo" alt="logo" />
                </Button>
              </IconButton>
              <Typography variant="h5" color="inherit" className={classes.flex}>
                Communify
              </Typography>
              <Button color="inherit">SignUp</Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">
                <AccountCircleIcon />
              </Button>
            </Toolbar>
          </AppBar>
        </Fade>
      );
    }
  }
);
const Header = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <ScrolledAppBar />
    <div className={classes.toolbarMargin} />
    <p>{"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}</p>
  </div>
));
export default Header;
