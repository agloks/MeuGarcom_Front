import React from "react";
import MUIDataTable from "mui-datatables";

import data from "data/Ordens/ordens"

const columns = [
 {
  name: "nome",
  label: "Nome",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "perfil",
  label: "Perfil",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "mesa",
  label: "Mesa",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "pedido",
  label: "Pedido",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "valor",
  label: "Valor",
  options: {
   filter: true,
   sort: false,
  }
 }
];

const options = {
  filterType: 'checkbox',
};

const DataTable = () => (
  <MUIDataTable
    title={"Controle Mesas"}
    data={data}
    columns={columns}
    options={options}
  />
)

export default DataTable;