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

// function TableList() {

//   const columns = [
//     // {field: 'FID', headerName: 'ID'},
//     {field: 'Provinsi', headerName: 'Provinsi', width: 200 },
//     {field: 'Kasus_Posi', headerName: 'Kasus', width: 200},
//     {field: 'Kasus_Semb', headerName: 'Sembuh', width: 200},
//     {field: 'Kasus_Meni', headerName: 'Meninggal', width: 200},

//   ];
  
//   const rows = [
//     {
//             // id: 11,
//             // "Kode_Provi": 31,
//             Provinsi: 'DKI Jakarta',
//             Kasus_Posi: 117462,
//             Kasus_Semb: 108116,
//             Kasus_Meni: 2440,
        
//     },
//     {
//             // id: 15,
//             Provinsi: "Jawa Timur",
//             Kasus_Posi: 56070,
//             Kasus_Semb: 49995,
//             Kasus_Meni: 4007
//     },
// ];

  // return (
    // <div style={{ height: 400, width: '100%' }}>
      // <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    // </div>
    // <div style={{ textAlign: 'center' }}>
      
    //   <MaterialTable
    //         title="Daftar Covid 19"
    //         columns={columns}
    //         data={rows.attributes}
    //       />
    //   <table>
    //     <thead>
    //       <tr>
    //         <th><p>Provinsi</p></th>
    //         <th><p>Positif</p></th>
    //         <th><p>Meninggal</p></th>
    //         <th><p>Sembuh</p></th>
    //       </tr>
    //     </thead>
    //     </table>
      
    //   {dataProv.map((dataProv, index) =>
        
    //     <div key={index}>
          
    //       <p><strong>Universitas</strong>: {data.universitas}</p>
    //       <div style={{ height: 400, width: '100%' }}>
    //         <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    //       </div>
    //       <table>
    //         <tr>
    //           <td><p>{dataProv.attributes.Provinsi}</p></td>
    //           <td><p>{dataProv.attributes.Kasus_Posi}</p></td>
    //           <td><p>{dataProv.attributes.Kasus_Semb}</p></td>
    //           <td><p>{dataProv.attributes.Kasus_Meni}</p></td>
    //         </tr>
    //       </table>
    //       <p><strong>Provinsi</strong>:{dataProv.attributes.Provinsi}</p>
    //       <p><strong>Kasus Positif</strong>: {dataProv.attributes.Kasus_Posi}</p>
    //       <p><strong>Kasus Sembuh</strong>: {dataProv.attributes.Kasus_Semb}</p>
    //       <p><strong>Kasus Meninggal</strong>: {dataProv.attributes.Kasus_Meni}</p>
    //     </div>
    //   )}
    // </div>
  // );
// }
// TableList.layout = Admin;

// export default TableList;

function TableList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid rows={rows} columns={columns} pageSize={5} /> */}
      <MaterialTable
          // other props
          // rows={rows} columns={columns} pageSize={5}
          columns = {[
            // {field: 'FID', headerName: 'ID'},
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