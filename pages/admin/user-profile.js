import React from "react";
import {Line, Pie} from 'react-chartjs-2';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const data = {
	labels: [
		'Jawa',
		'Sumatera',
    'Kalimantan',
    'Sulawesi',
    'Papua'
	],
	datasets: [{
		data: [288.059,78.836,37.198,36.361,26.027],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#FF7300',
    '#52D726'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#FF7300',
    '#52D726'
		]
	}]
};

const useStyles = makeStyles(styles);

function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <h2>Agregasi Covid-19 di 5 Pulau besar Indonesia</h2>
            <Pie
              data = {data}
              width={150}
              height={150}
              />
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

UserProfile.layout = Admin;

export default UserProfile;
