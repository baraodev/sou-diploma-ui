import React, { Component } from 'react';

import './style.scss';

const months = [
	'janeiro',
	'fevereiro',
	'março',
	'abril',
	'maio',
	'junho',
	'julho',
	'agosto',
	'setembro',
	'outubro',
	'novembro',
	'dezembro'
];
class LayoutDiploma extends Component {
	render() {
		const { diplomas } = this.props;
		return (
			<div className="container">
				{diplomas.map((diploma) => (
					<div className="diploma" key={diploma.RA}>
						<div className="front">
							<div className="content">
								<p className="paragraph">
									A presidente da <span>Universidade Virtual do Estado de São Paulo</span>,
						</p>
								<p className="paragraph -marginBottom">no uso de suas atribuições, confere a</p>
								<h1 className="name">{diploma.nome_aluno}</h1>
								<p className="paragraph">de nacionalidade {diploma.Nacionalidade},</p>
								<p className="paragraph">
									portador{diploma.gender === 'F' && 'a'} da cédula de identidade RG N° {diploma.rg} - SP,
						</p>
								<p className="paragraph">
									nascido em {diploma.birth_date ? new Date(diploma.birth_date).getDate() : ''} de{' '}
									{diploma.birth_date ? months[new Date(diploma.birth_date).getMonth()] : ''} de{' '}
									{diploma.birth_date ? new Date(diploma.birth_date).getFullYear() : ''}  e natural do Estado
							de {diploma.natural},
						</p>
								<p className="paragraph">o grau de</p>
								<h2 className="course">
									{diploma.gender === 'M' ? 'Licenciado' : 'Licenciada'} em {diploma.curso.split(' ')[2]}
								</h2>
								<p className="paragraph">
									obtido em {diploma.data_conclusao ? diploma.data_conclusao.split('/')[2] : ''} {' '}
									{diploma.data_conclusao ? months[Number(diploma.data_conclusao.split('/')[1]) - 1] : ''} de{' '}
									{diploma.data_conclusao ? diploma.data_conclusao.split('/')[0] : ''} no curso de{' '}
									{diploma.curso}
								</p>
								<p className="paragraph -marginBottom">
									para que possa gozar dos direitos e prerrogativas legais, outorga-lhe o presente diploma
						</p>
								<p className="paragraph">
									São Paulo, {new Date().getDate()} de {months[new Date().getMonth()]} de{' '}
									{new Date().getFullYear()}.
						</p>
							</div>
							<div className="signatures">
								<p className="signature">
									Prof.ª Dr.ª Cleide Marly Nébias <span>Diretora Acadêmica</span>
								</p>
								<p className="signature">
									Fernanda Gouveia <span>Presidente</span>
								</p>
								<p className="signature">
									<span>Diplomado(a)</span>{' '}
								</p>
							</div>
						</div>
						<div className="back">
							<div className="recognized">
								<p className="paragraph">{diploma.Portaria}</p>
							</div>
							<div className="area">
								<p className="university">Universidade Virtual do Estado de São Paulo - UNIVESP</p>
								<p className="paragraph -marginBottom">Secretaria de Registro Acadêmico - SRA</p>
								<p className="paragraph">Diploma registrado sob n° {diploma.degree_number}</p>
								<p className="paragraph">rótulo n° {diploma.degree_label}</p>
								<p className="paragraph">processo n° {diploma.process_number}</p>
								<p className="paragraph -marginBottom">nos termos do artigo 48 da lei 9.394, de 20/12/1996.</p>
								<p className="paragraph">São Paulo, {new Date().getDate()} de {months[new Date().getMonth()]} de{' '}
									{new Date().getFullYear()}.</p>
								<div className="signatures">
									<p className="signature">
										<span>&nbsp;</span> &nbsp;
							</p>
									<p className="paragraph">de acordo,</p>
									<p className="signature">
										<span>&nbsp;</span> &nbsp;
							</p>
								</div>
							</div>
						</div>
					</div>
				))
				}
			</div>
		)
	}
}

export default LayoutDiploma;
