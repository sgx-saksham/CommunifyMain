/*eslint-disable*/
import React from "react";
import ChartistGraph from "react-chartist";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Hidden from "@material-ui/core/Hidden";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/Communify/views/iconsStyle.js";
import { Button } from "@material-ui/core";
// import IntegratedEnvironment from "./../../CompilerComponents/IntegratedEnvironment";
import { bugs, website, server } from "variables/general.js";

import { algorithms } from "variables/charts.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <div>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart>
          <CardHeader color="danger">
            <ChartistGraph
              className="ct-chart"
              data={algorithms.data}
              type="Line"
              options={algorithms.options}
              listener={algorithms.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Algorithm Visualizer</h4>
            <a className={classes.cardCategory} href="https://visualgo.net/en">
              You can Visualize many Algorithms from this section
            </a>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              This is the Way you can learn many algorithms not by reading or by
              studying but by understanding them and learning them through
              visualizations
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </div>
  );
}
