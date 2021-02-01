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
import style from 'assets/css/table.css';
import { DataGrid } from '@material-ui/data-grid';
import MaterialTable from "material-table";

function TableList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <MaterialTable
      title="Table Covid 19 Indonesia"
          columns = {[
            {field: 'Provinsi', title: 'Provinsi', width: 200 },
            {field: 'Kasus_Posi', title: 'Kasus', width: 200},
            {field: 'Kasus_Semb', title: 'Sembuh', width: 200},
            {field: 'Kasus_Meni', title: 'Meninggal', width: 200},
        
          ]}
          
          data = {[
            {
                    // id: 11,
                    // "Kode_Provi": 31,
                    Provinsi: 'DKI Jakarta',
                    Kasus_Posi: 117462,
                    Kasus_Semb: 108116,
                    Kasus_Meni: 2440,
                
            },
            {
                    // id: 15,
                    Provinsi: "Jawa Timur",
                    Kasus_Posi: 56070,
                    Kasus_Semb: 49995,
                    Kasus_Meni: 4007
            },
            {
                  id: 12,
                  Provinsi: "Jawa Barat",
                  Kasus_Posi: 44182,
                  Kasus_Semb: 32901,
                  Kasus_Meni: 804
              
          },
          {
                   id: 13,
                    Provinsi: "Jawa Tengah",
                    Kasus_Posi: 42372,
                    Kasus_Semb: 32491,
                    Kasus_Meni: 1990
              
          },
          {
               
                   id: 27,
                    Provinsi: "Sulawesi Selatan",
                    Kasus_Posi: 19260,
                    Kasus_Semb: 17172,
                    Kasus_Meni: 474
              
          },
          {
               
                   id: 3,
                    Provinsi: "Sumatera Barat",
                    Kasus_Posi: 17142,
                    Kasus_Semb: 13663,
                    Kasus_Meni: 311
              
          },
          {
               
                   id: 23,
                    Provinsi: "Kalimantan Timur",
                    Kasus_Posi: 16807,
                    Kasus_Semb: 14081,
                    Kasus_Meni: 528
              
          },
          {
               
                   id: 4,
                    Provinsi: "Riau",
                    Kasus_Posi: 16446,
                    Kasus_Semb: 13961,
                    Kasus_Meni: 382
              
          },
          {
               
                   id: 2,
                    Provinsi: "Sumatera Utara",
                    Kasus_Posi: 14209,
                    Kasus_Semb: 11640,
                    Kasus_Meni: 578
              
          },
          {
               
                   id: 17,
                    Provinsi: "Bali",
                    Kasus_Posi: 12631,
                    Kasus_Semb: 11530,
                    Kasus_Meni: 403
              
          },
          {
               
                   id: 22,
                    Provinsi: "Kalimantan Selatan",
                    Kasus_Posi: 12447,
                    Kasus_Semb: 11320,
                    Kasus_Meni: 502
              
          },
          {
               
                   id: 16,
                    Provinsi: "Banten",
                    Kasus_Posi: 10831,
                    Kasus_Semb: 8153,
                    Kasus_Meni: 298
              
          },
          {
               
                   id: 33,
                    Provinsi: "Papua",
                    Kasus_Posi: 9732,
                    Kasus_Semb: 4930,
                    Kasus_Meni: 137
              
          },
          {
               
                   id: 6,
                    Provinsi: "Sumatera Selatan",
                    Kasus_Posi: 8666,
                    Kasus_Semb: 7010,
                    Kasus_Meni: 467
              
          },
          {
               
                   id: 1,
                    Provinsi: "Aceh",
                    Kasus_Posi: 7862,
                    Kasus_Semb: 6265,
                    Kasus_Meni: 282
              
          },
          {
               
                   id: 25,
                    Provinsi: "Sulawesi Utara",
                    Kasus_Posi: 5911,
                    Kasus_Semb: 4897,
                    Kasus_Meni: 225
              
          },
          {
               
                   id: 28,
                    Provinsi: "Sulawesi Tenggara",
                    Kasus_Posi: 5673,
                    Kasus_Semb: 4396,
                    Kasus_Meni: 90
              
          },
          {
               
                   id: 21,
                    Provinsi: "Kalimantan Tengah",
                    Kasus_Posi: 4926,
                    Kasus_Semb: 4149,
                    Kasus_Meni: 168
              
          },
          {
               
                   id: 10,
                    Provinsi: "Kepulauan Riau",
                    Kasus_Posi: 4735,
                    Kasus_Semb: 3254,
                    Kasus_Meni: 117
              
          },
          {
               
                   id: 34,
                    Provinsi: "Papua Barat",
                    Kasus_Posi: 4671,
                    Kasus_Semb: 3970,
                    Kasus_Meni: 71
              
          },
          {
               
                   id: 14,
                    Provinsi: "Daerah Istimewa Yogyakarta",
                    Kasus_Posi: 4511,
                    Kasus_Semb: 3620,
                    Kasus_Meni: 111
              
          },
          {
               
                   id: 18,
                    Provinsi: "Nusa Tenggara Barat",
                    Kasus_Posi: 4389,
                    Kasus_Semb: 3540,
                    Kasus_Meni: 229
              
          },
          {
               
                   id: 8,
                    Provinsi: "Bangka Belitung",
                    Kasus_Posi: 4277,
                    Kasus_Semb: 3588,
                    Kasus_Meni: 79
              
          },
          {
               
                   id: 31,
                    Provinsi: "Maluku",
                    Kasus_Posi: 4115,
                    Kasus_Semb: 3538,
                    Kasus_Meni: 53
              
          },
          {
               
                   id: 29,
                    Provinsi: "Gorontalo",
                    Kasus_Posi: 3054,
                    Kasus_Semb: 2893,
                    Kasus_Meni: 88
              
          },
          {
               
                   id: 9,
                    Provinsi: "Lampung",
                    Kasus_Posi: 2669,
                    Kasus_Semb: 1327,
                    Kasus_Meni: 105
              
          },
          {
               
                   id: 32,
                    Provinsi: "Maluku Utara",
                    Kasus_Posi: 2290,
                    Kasus_Semb: 1946,
                    Kasus_Meni: 76
              
          },
          {
               
                   id: 20,
                    Provinsi: "Kalimantan Barat",
                    Kasus_Posi: 2060,
                    Kasus_Semb: 1507,
                    Kasus_Meni: 22
              
          },
          {
               
                   id: 5,
                    Provinsi: "Jambi",
                    Kasus_Posi: 1438,
                    Kasus_Semb: 934,
                    Kasus_Meni: 30
              
          },
          {
               
                   id: 7,
                    Provinsi: "Bengkulu",
                    Kasus_Posi: 1392,
                    Kasus_Semb: 1046,
                    Kasus_Meni: 60
              
          },
          {
               
                   id: 30,
                    Provinsi: "Sulawesi Barat",
                    Kasus_Posi: 1307,
                    Kasus_Semb: 925,
                    Kasus_Meni: 17
              
          },
          {
               
                   id: 26,
                    Provinsi: "Sulawesi Tengah",
                    Kasus_Posi: 1156,
                    Kasus_Semb: 859,
                    Kasus_Meni: 48
              
          },
          {
               
                   id: 24,
                    Provinsi: "Kalimantan Utara",
                    Kasus_Posi: 958,
                    Kasus_Semb: 829,
                    Kasus_Meni: 11
              
          },
          {
               
                   id: 19,
                    Provinsi: "Nusa Tenggara Timur",
                    Kasus_Posi: 830,
                    Kasus_Semb: 593,
                    Kasus_Meni: 14
              
          }
        ]}
        // actions={[
        //   {
        //     onClick:(event,rowData)
        //   }
        // ]}
          options={{
            exportButton: true
          }}
      />
    </div>
  );
}

TableList.layout = Admin;

export default TableList;