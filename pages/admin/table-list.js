import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import dataProv from 'components/dataProv';
// import style from 'assets/css/table';

function TableList() {
  
  return (
    <div style={{ textAlign: 'center' }}>
      <table>
        <thead>
          <tr>
            <th><p>Provinsi</p></th>
            <th><p>Positif</p></th>
            <th><p>Meninggal</p></th>
            <th><p>Sembuh</p></th>
          </tr>
        </thead>
      </table>
      {dataProv.map((dataProv, index) =>
      
        <div key={index} style={{ marginBottom: 50 }}>
          {/* <p><strong>Universitas</strong>: {data.universitas}</p> */}
          <table>
            <tr>
              <th><p>{dataProv.attributes.Provinsi}</p></th>
              <th><p>{dataProv.attributes.Kasus_Posi}</p></th>
              <th><p>{dataProv.attributes.Kasus_Semb}</p></th>
              <th><p>{dataProv.attributes.Kasus_Meni}</p></th>
            </tr>
          </table>
          {/* <p><strong>Provinsi</strong>:{dataProv.attributes.Provinsi}</p>
          <p><strong>Kasus Positif</strong>: {dataProv.attributes.Kasus_Posi}</p>
          <p><strong>Kasus Sembuh</strong>: {dataProv.attributes.Kasus_Semb}</p>
          <p><strong>Kasus Meninggal</strong>: {dataProv.attributes.Kasus_Meni}</p> */}
        </div>
      )}
    </div>
  );
}
TableList.layout = Admin;

export default TableList;
