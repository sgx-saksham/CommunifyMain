import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// // @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// // core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

// import styles from "assets/jss/Communify/views/dashboardStyle.js";

// const useStyles = makeStyles(styles);

export default function Dashboard() {
  // const classes = useStyles();
  return (
    <div>
      {/* <GridContainer>
         <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem> 
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>  */}
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <title>Communify</title>
        {/* this is header */}
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
              <a className="mr-5 hover:text-white">Team</a>
              <a className="mr-5 hover:text-white">About</a>
              <a className="mr-5 hover:text-white">Home</a>
              {/* <a href="/index.html" class="hover:text-white">tailwind</a> */}
            </nav>
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-yellow-400 lg:items-center lg:justify-center mb-4 md:mb-0">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24"> */}
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              <span
                href="/index.html"
                className="ml-3 text-xl xl:block lg:hidden"
              >
                Communify
              </span>
            </a>
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
              {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                The Project
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>
        </header>
        {/* this is Introductory section  */}
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1603969280040-3bbb77278211?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2MjM3MDc1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=720"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">
                Enhanced Messenger and Community For CS Enthusiasts
              </h1>
              <p className="leading-relaxed mb-8">
                This Project is all about the CS related topics which will
                provide CS enthusiasts more information with proper learning and
                a good Chat community.
              </p>
              <div className="flex justify-center">
                {/* <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button> */}
                {/* <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
              </div>
            </div>
          </div>
        </section>
        {/* This is About section */}
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                About..
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Our Project has different novelties of things .
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9" />
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                  </svg>
                  <h2 className="title-font font-medium text-xl text-white">
                    Plaform
                  </h2>
                  <p className="leading-relaxed">Independent</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                  </svg>
                  <h2 className="title-font font-medium text-xl text-white">
                    Chatting
                  </h2>
                  <p className="leading-relaxed">With Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 18v-6a9 9 0 0118 0v6" />
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                  </svg>
                  <h2 className="title-font font-medium text-xl text-white">
                    Multimedia
                  </h2>
                  <p className="leading-relaxed">Sharing</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="text-yellow-400 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <h2 className="title-font font-medium text-xl text-white">
                    Privacy
                  </h2>
                  <p className="leading-relaxed">with Data</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1534137667199-675a46e143f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2MjM2OTcz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=720"
              />
            </div>
            {/* Different novelties */}
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              {/* This is Compiler Section */}
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-yellow-400 text-lg title-font font-medium mb-3">
                    Compilers and IDE support
                  </h2>
                  <p className="leading-relaxed text-base">
                    CS enthusiasts will get compilers to check their code then
                    and there itself for better understanding of their code.
                  </p>
                </div>
              </div>
              {/* This is Multipurpose Calculators */}
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={6} cy={6} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-yellow-400 text-lg title-font font-medium mb-3">
                    Multipurpose Calculator Functions
                  </h2>
                  <p className="leading-relaxed text-base">
                    A Multipurpose Calculator for the CS enthusiasts to make a
                    provide direct calculations in the app itself.
                  </p>
                </div>
              </div>
              {/* This is Messenger Section */}
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-yellow-400 text-lg title-font font-medium mb-3">
                    Messenger and Community for our Enthusiasts
                  </h2>
                  <p className="leading-relaxed text-base">
                    Community and chat for user to share their information and
                    knowledge with each other and can help each other
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* this is team  section */}
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-yellow-400 tracking-widest">
                OUR TEAM
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever we do we give our best and by best we does not mean
                just individual performance, we mean the team performance.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {/* Rishav Raj */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQEqyJ2pcZge2g/profile-displayphoto-shrink_200_200/0/1615377075711?e=1621468800&v=beta&t=8FvZ3qmYSz-ohnQ8-C2g6PiDAswMQyD-NevJ-1aGeW0"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-yellow-400">
                      Rishav Raj
                    </h2>
                    <h3 className="text-white mb-3 text-white">
                      Back-End Developer
                    </h3>
                    <p className="mb-4 ">
                      A Back End Developer who ensured the working of chat and
                      community of 'Communify'
                    </p>
                    <span className="inline-flex">
                      <a
                        href="https://www.linkedin.com/in/rishav-raj-85693b1a9/"
                        className="ml-3 text-white"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          />
                          <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* Yash wankar */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQGOw7cvyhLcuQ/profile-displayphoto-shrink_800_800/0/1597942838102?e=1620259200&v=beta&t=0w6KFnRMSuskipSHktUmJq5Y8oyxXPCTtg3ZBs1cgCA"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-yellow-400">
                      Yash Wankar
                    </h2>
                    <h3 className="text-white mb-3 text-white">
                      Tester and Debugger
                    </h3>
                    <p className="mb-4 ">
                      Checks out the testing and debugging of the app
                      'Communify'
                    </p>
                    <span className="inline-flex">
                      <a
                        href="https://www.linkedin.com/in/yashwankar/"
                        className="ml-3 text-white"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          />
                          <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* Saksham Gupta */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQEg4EPl1DAsoA/profile-displayphoto-shrink_800_800/0/1609447289255?e=1620259200&v=beta&t=uyfEl_6EnnsKmRENVSHwO03kt3HAov_lTlHouaFeqMY"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-yellow-400">
                      Saksham Gupta
                    </h2>
                    <h3 className="text-white mb-3 text-white">
                      Front-End Developer
                    </h3>
                    <p className="mb-4 ">
                      A Front-End Developer who designed beautiful User
                      Interface for the app 'Communify'{" "}
                    </p>
                    <span className="inline-flex">
                      <a
                        href="https://www.linkedin.com/in/saksham-gupta-9573b31a3/"
                        className="ml-3 text-white"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          />
                          <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* Kekti patel */}
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFlsM8UADjDsQ/profile-displayphoto-shrink_800_800/0/1605161193510?e=1620259200&v=beta&t=lETCyt59HcIDGW131zOJ1ymq35yf1mbCxte6SdcGLh0"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-yellow-400">
                      Ketki Patel
                    </h2>
                    <h3 className="text-white mb-3 ">Project Lead</h3>
                    <p className="mb-4 ">
                      Monitoring the project from Zero to One also finalising
                      the documentations and reports
                    </p>
                    <span className="inline-flex">
                      <a
                        href="https://www.linkedin.com/in/ketki-patil-7a02961a3/"
                        className="ml-3 text-white"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          />
                          <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* this is footer */}
        <footer className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-yellow-400">
              <span className="ml-3 text-xl">Communify</span>
            </a>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              {" "}
              Communify —
              <a
                href="https://www.linkedin.com/in/saksham-gupta-9573b31a3/"
                className="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @SakshamGupta
              </a>
            </p>
          </div>
        </footer>
        {/* Here Ends the website */}
      </div>
    </div>
  );
}
