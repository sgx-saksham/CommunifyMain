import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import PollIcon from "@material-ui/icons/Poll";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

import {
  algorithms,
  compiler,
  // dailySalesChart,
  // emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/Communify/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      {/* Operating systems section */}
      <GridContainer>
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
              <h4 className={classes.cardTitle}>Operating Systems</h4>
              <p className={classes.cardCategory}>
                Best Calculators for The OS calculations
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Check out Below
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* Calculators for OS */}
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Operating System</p>
              <h3 className={classes.cardTitle}>CPU Scheduling</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a
                  href="https://nicomedes.assistedcoding.eu/#/app/os/process_scheduling"
                  onClick={(e) => e.preventDefault()}
                >
                  Click here for Calculator
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Operating System</p>
              <h3 className={classes.cardTitle}>Page Replacement</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a
                  href="https://nicomedes.assistedcoding.eu/#/app/os/page_replacement"
                  onClick={(e) => e.preventDefault()}
                >
                  Click here for Calculator
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Operating System</p>
              <h3 className={classes.cardTitle}>Disk Scheduling</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a
                  href="https://nicomedes.assistedcoding.eu/#/app/os/disk_scheduling"
                  onClick={(e) => e.preventDefault()}
                >
                  Click here for Calculator
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* Operating system ends here */}
      {/* This is AAnother section */}
      {/* linear algebra sectoon */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={algorithms.data}
                type="Line"
                options={algorithms.options}
                listener={algorithms.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Linear Algebra</h4>
              <p className={classes.cardCategory}>
                Best Calculators for the Linear algebra - computational as well
                applied
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                Check below for the calculators
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>
                Kernel of linear transformation
              </h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="http://www.math.odu.edu/~bogacki/cgi-bin/lat.cgi?c=ker"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>
                Range of the linear transformation
              </h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="http://www.math.odu.edu/~bogacki/cgi-bin/lat.cgi?c=range"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>
                Linear independence and dependence
              </h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="http://www.math.odu.edu/~bogacki/cgi-bin/lat.cgi?c=li"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>
                Reduced row echelon form[rref]
              </h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="http://www.math.odu.edu/~bogacki/cgi-bin/lat.cgi?c=rref"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>
                Basis of the space spanned by the set
              </h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="http://www.math.odu.edu/~bogacki/cgi-bin/lat.cgi?c=bas"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>
                Basis of the null space of a matrix
              </h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="http://www.math.odu.edu/~bogacki/cgi-bin/lat.cgi?c=null"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>
                Determinant using row operations
              </h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="http://www.math.odu.edu/~bogacki/cgi-bin/lat.cgi?c=det"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <PollIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Linear Algebra</p>
              <h3 className={classes.cardTitle}>Percentage calculation</h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="https://percentage-calculation.com/?ref=getcalc"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
      </GridContainer>
      {/* Linear ends here */}
      {/* This is another */}
      <Card>
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>
            Other Calculators for different purposes
          </h4>
          <p className={classes.cardCategoryWhite}>Other Calculators</p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h5>There are other Calculators too</h5>
              <br />
            </GridItem>
          </GridContainer>
          <br />
          <br />
        </CardBody>
      </Card>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <GraphicEqIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Network</p>
              <h3 className={classes.cardTitle}>Network Analysis</h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="https://nicomedes.assistedcoding.eu/#/app/networking/basics"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <GraphicEqIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Parallel System</p>
              <h3 className={classes.cardTitle}>MPI</h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="https://nicomedes.assistedcoding.eu/#/app/parallel_systems/mpi"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <GraphicEqIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Data Science</p>
              <h3 className={classes.cardTitle}>TF-IDF (Syspro 2018)</h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="https://nicomedes.assistedcoding.eu/#/app/tfidf"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <GraphicEqIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Database</p>
              <h3 className={classes.cardTitle}>Database Trainer</h3>
            </CardHeader>
            <CardFooter stats>
              <a
                href="https://nicomedes.assistedcoding.eu/#/app/dbtrainer"
                onClick={(e) => e.preventDefault()}
              >
                Click here for Calculator
              </a>
            </CardFooter>
          </Card>
        </GridItem>
        {/* another */}
      </GridContainer>
    </div>
  );
}
