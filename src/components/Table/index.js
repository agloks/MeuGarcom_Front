import React from "react";
import MUIDataTable from "mui-datatables";

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

const data = [
 { nome: "Joelma", perfil: "Badalado", mesa: "02", pedido: "Combo 2", valor: "RS 10,10" },
 { nome: "Ricardo", perfil: "Simples", mesa: "04", pedido: "Combo 3", valor: "RS 20,10" },
 { nome: "Afonso Ricardo", perfil: "Badalado", mesa: "02", pedido: "Combo 1", valor: "RS 15,00" },
 { nome: "Amanda", perfil: "Calmo", mesa: "03", pedido: "Combo 4", valor: "RS 30,10" },
 { nome: "Joel Santana", perfil: "Calmo", mesa: "03", pedido: "Combo 3", valor: "RS 20,10" },
 { nome: "Igo Batista Dos Santos", perfil: "Sotisficado", mesa: "10", pedido: "Combo 1", valor: "RS 9,99" },
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