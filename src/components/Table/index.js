import React from 'react';
import Pagination from 'react-js-pagination';

import { Label, Checkbox, TableUI, Head, Row, Column, Body } from './styles';

const getLastSem = date => {
  const dateSplited = date.split('/');
  return `${dateSplited[0]}.${Math.floor(dateSplited[1] / 6)}`
}

const Table = ({ data, page, perPage, length, selectAll, handlePagination, handleSelectAll, handleSelect }) => (
  <>
		<Label>
			<Checkbox type="checkbox" onChange={handleSelectAll} checked={selectAll} /> Selecionar todos
		</Label>
		<TableUI>
			<Head>
				<Row>
					<Column>RA</Column>
					<Column>Nome</Column>
					<Column>Semestre/Ano de ingresso</Column>
					<Column>Semestre/Ano de conclusão</Column>
					<Column>Curso</Column>
					<Column>N° do Processo</Column>
					<Column />
				</Row>
			</Head>
			<Body>
        {data[page].map(row => (
          <Row onClick={e => handleSelect(e, row.RA)}>
            <Column>{row.RA}</Column>
            <Column>{row.nome_aluno}</Column>
            <Column>{row.year_entry_sem}</Column>
            <Column>{row.data_conclusao && getLastSem(row.data_conclusao)}</Column>
            <Column>{row.curso}</Column>
            <Column>{row.process_number}</Column>
            <Column>
              <Checkbox type="checkbox" onClick={e => handleSelect(e, row.RA)} checked={row.check} />
            </Column>
				</Row>
        ))}
			</Body>
		</TableUI>
    <Pagination
      activePage={page + 1}
      itemsCountPerPage={perPage}
      totalItemsCount={length}
      pageRangeDisplayed={5}
      onChange={handlePagination}
      innerClass="pagination"
      itemClass="page-item"
      linkClass="page-link"
    />
  </>
);

export default Table;
