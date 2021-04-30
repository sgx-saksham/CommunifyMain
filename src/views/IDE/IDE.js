/*eslint-disable*/
import React from "react";
import ChartistGraph from "react-chartist";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

import { compiler } from "variables/charts.js";

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
              data={compiler.data}
              type="Bar"
              options={compiler.options}
              responsiveOptions={compiler.responsiveOptions}
              listener={compiler.animation}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>Compiler For your Code! </h4>
            <p className={classes.cardCategory}>
              <a
                href={
                  "https://sgx-saksham.github.io/Communify-compiler/communifyCompiler.html"
                }
              >
                This is to Compile Your Code and Happy Hacking!
              </a>
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              Bugs... huh, terminate them on our terminal!{" "}
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </div>
  );
}
