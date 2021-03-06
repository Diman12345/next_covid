import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import dataGlobal from "components/dataGlobal";
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
          <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <div style={{ textAlign: 'center' }}>
                {dataGlobal.map((dataGlobal, index) =>
                  <div key={index} style={{ marginBottom: 50 }}>
                    {/* <p><strong>Universitas</strong>: {data.universitas}</p> */}
                    <p className={classes.cardTitle}>Positif: </p>
                    <h3 className={classes.cardTitle}>
                        {dataGlobal.positif}
                    </h3>
                  </div>
                )}
              </div>
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
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <Icon>content_paste</Icon>
              </CardIcon>
              <div style={{ textAlign: 'center' }}>
                {dataGlobal.map((dataGlobal, index) =>
                  <div key={index} style={{ marginBottom: 50 }}>
                    {/* <p><strong>Universitas</strong>: {data.universitas}</p> */}
                    <p className={classes.cardTitle}>Sembuh: </p>
                    <h3 className={classes.cardTitle}>
                        {dataGlobal.sembuh}
                    </h3>
                  </div>
                )}
              </div>
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
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>assignment_ind</Icon>
              </CardIcon>
              <div style={{ textAlign: 'center' }}>
                {dataGlobal.map((dataGlobal, index) =>
                  <div key={index} style={{ marginBottom: 50 }}>
                    {/* <p><strong>Universitas</strong>: {data.universitas}</p> */}
                    <p className={classes.cardTitle}>Meninggal: </p>
                    <h3 className={classes.cardTitle}>
                        {dataGlobal.meninggal}
                    </h3>
                  </div>
                )}
              </div>
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
              <div style={{ textAlign: 'center' }}>
                {dataGlobal.map((dataGlobal, index) =>
                  <div key={index} style={{ marginBottom: 50 }}>
                    {/* <p><strong>Universitas</strong>: {data.universitas}</p> */}
                    <p className={classes.cardTitle}>Dirawat: </p>
                    <h3 className={classes.cardTitle}>
                        {dataGlobal.dirawat}
                    </h3>
                  </div>
                )}
              </div>
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
        <GridItem xs={36} sm={36} md={12}>
          <Card chart>
            <CardHeader>
              <Bar
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                // type="Bar"
                options={emailsSubscriptionChart.options}
                // responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                // listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Grafik angka COVID 19 Indonesia</h4>
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
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
