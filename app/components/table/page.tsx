'use client'
import { useState } from "react";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Table = dynamic(async () => (await import('@spms/ui-react')).Table, {ssr: false})

export default function TableComponent() {
  const columns = [
		{ field: 'name', label: 'Nome' },
		{ field: 'area', label: 'Área' },
		// { field: 'country', label: 'País' },
	]

	const rows = [
		{
			id: '998',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png',
				field: 'name',
			},
			name: 'Ioni Bowcher',
			area: 'Tecnologia',
			country: 'Brasil',
			expandedContent: <button type="button">Teste</button>,
		},
		{
			id: '999',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
				field: 'name',
			},
			name: 'Maria Manuel Sampaio',
			area: 'Cardiologia de Intervenção Estrutural',
			country: 'Portugal',
			expandedContent: <p>Teste de componente como expanded content</p>,
		},
		{
			id: '1000',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png',
				field: 'name',
			},
			name: 'James Butt',
			area: 'Tecnologia',
			country: 'Portugal',
			expandedContent: <p>Teste de componente como expanded content</p>,
		},
		{
			id: '1001',
			name: 'Josephine Darakjy',
			area: 'Tecnologia',
			image: {
				url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png',
				field: 'name',
			},
		},
		{
			id: '1002',
			name: 'Art Venere',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1003',
			name: 'Lenna Paprocki',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1004',
			name: 'Donette Foller',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1005',
			name: 'Simona Morasca',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1006',
			name: 'Mitsue Tollner',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1007',
			name: 'Leota Dilliard',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1008',
			name: 'Sage Wieser',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1009',
			name: 'Kris Marrier',
			area: 'Tecnologia',
		},
		{
			id: '1010',
			name: 'Minna Amigon',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1011',
			name: 'Abel Maclead',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1012',
			name: 'Kiley Caldarera',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1013',
			name: 'Graciela Ruta',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1014',
			name: 'Cammy Albares',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1015',
			name: 'Mattie Poquette',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1016',
			name: 'Meaghan Garufi',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1017',
			name: 'Gladys Rim',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1018',
			name: 'Yuki Whobrey',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1019',
			name: 'Fletcher Flosi',
			area: 'Cardiologia de Intervenção Estrutural',
		},
		{
			id: '1020',
			name: 'Fasdfasd Tsdfads',
			area: 'Odontologia',
		},
		{
			id: '1021',
			name: 'Grtqf Tofgh',
			area: 'Odontologia',
		},
	]

  const [visibleRows, setVisibleRows] = useState(rows)

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value

		const filteredRows = rows.filter(row =>
			row.name.toLowerCase().includes(value.toLowerCase())
		)

		setVisibleRows(filteredRows)
	}

  return (
    <main className={styles.main}>
      <input className={styles.input} type="text" onChange={e => handleSearch(e)} />

      <Table
        columns={columns}
        rows={visibleRows}
        options={{
          variant: 'pagination',
          serverPagination: false,
          rowsPerPage: 5,
          // totalRecords: 22,
          selectOnlyCurrentPage: true,
          filter: false,
          filterBy: 'name',
          showSelectedButton: false,
          selectedRowsButtonText: 'Get selected rows',
        }}
        checkboxSelection
        expansible
        editColumn
        deleteColumn
        editRow={id => console.log(id)}
        deleteRow={id => console.log(id)}
        selectedRows={rows => console.log(rows)}
        changePage={event => console.log(event)}
      />
    </main>
  );
}
