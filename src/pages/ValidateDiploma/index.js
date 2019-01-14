import React, { Component } from 'react';

import api from '../../services/diplomaApi';

class ValidateDiploma extends Component {
	componentDidMount() {
		const { match: { params: { ra, classId } } } = this.props;
		console.log(ra, classId);
		api
			.get(`v_print_list_temp?_where=(RA,eq,${ra})~and(class_id,eq,${classId})`)
			.then((res) =>
				alert(res.data.length && res.data[0].status_impress ? 'Certificado valido!' : 'Certificado invalido')
			)
			.catch((err) => console.error(err));
	}

	render() {
		return <div />;
	}
}

export default ValidateDiploma;
