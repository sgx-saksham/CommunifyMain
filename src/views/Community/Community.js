/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/Communify/views/iconsStyle.js";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <div>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Groups</h4>
            <p className={classes.cardCategoryWhite}>
              New groups on 15th March, 2021
            </p>
          </CardHeader>
          <CardBody>
            <Button>
              <a href={"https://communify.chatovod.com/"}>
                Sign in and Join the Chat To have some talk{" "}
              </a>
            </Button>
          </CardBody>
        </Card>
      </GridItem>
    </div>
  );
}
