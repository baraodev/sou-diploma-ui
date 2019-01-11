import React, { Component } from 'react';
import _ from 'lodash';
import ReactToPrint from 'react-to-print';

import SearchBox from '../../components/SearchBox';
import Table from '../../components/Table';
import Diploma from '../LayoutDiploma';

import api from '../../services/diplomaApi';

import { Container, Button } from './styles';

class AllInOne extends Component {
	state = {
		selectAll: false,
		diplomas: [ {} ],
		perPage: 10,
		page: 0
	};

	componentDidMount() {
		const { diplomas, perPage } = this.state;
		api.get('v_print_list_temp').then((res) => this.setState({ diplomas: res.data }));
	}

	handleSelectAll = ({ target }) => {
		const { diplomas } = this.state;
		this.setState({
			diplomas: diplomas.map((diploma) => ({ ...diploma, check: target.checked })),
			selectAll: target.checked
		});
		console.log(this.state.diplomas);
	};

	handleSelect = ({ target }, ra) => {
		const { diplomas } = this.state;
		this.setState({
			diplomas: diplomas.map((diploma) => (diploma.RA === ra ? { ...diploma, check: target.checked } : diploma))
		});
	};

	handlePagination = (pageClick) => {
		const page = pageClick - 1;
		const { diplomas, perPage } = this.state;
		const pages = parseInt(diplomas.length / perPage);
		if (page < 0 || page >= pages) return false;
		this.setState({ page });
	};

	renderContent = () => {
		// eslint-disable-line arrow-body-style
		return this.componentRef;
	};

	renderTrigger = () => {
		// eslint-disable-line arrow-body-style
		return (
			<button className="selecionar" onClick={this.saveOnLocalStorage} type="button">
				Imprimir
			</button>
		);
	};

	setRef = (ref) => {
		this.componentRef = ref;
	};

	render() {
		const { diplomas, selectAll, perPage, page } = this.state;
		return (
			<Container>
				<SearchBox />
				<Table
					data={_.chunk(diplomas, perPage)}
					length={diplomas.length}
					perPage={perPage}
					page={page}
					selectAll={selectAll}
					handlePagination={this.handlePagination}
					handleSelect={this.handleSelect}
					handleSelectAll={this.handleSelectAll}
				/>
				<ReactToPrint trigger={this.renderTrigger} content={this.renderContent} />
				<Diploma diplomas={diplomas.filter((item) => item.check)} ref={this.setRef} />
			</Container>
		);
	}
}

export default AllInOne;
