import React, { Component } from 'react';
import './style.scss';
import user from '../../assets/imgs/user.jpg';
import Submit from '../../components/Submit';
import Dowloand from '../../components/Dowloand';
import ButtonSearch from '../../components/BtnSearch';
import Menu from '../../components/Menu';
import BtnEmail from '../../components/BtnEmail';
import Audited from '../../../src/services/diplomaApi';

class Enable extends Component {
  state = {
    courses: []
  };

  async componentDidMount() {
    const res = await Audited.get('v_auditados');
    this.setState({ courses: res.data });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="title">Nome do Curso - 1º VIA</h2>
          <fieldset>
            <div>
              <nav id="menu">
                <ul>
                  <li>
                    <a href="#">Em Aberto</a>
                  </li>
                  <li>
                    <a className="link1 active">Auditados</a>
                  </li>
                  <li>
                    <a href="#">Retidos</a>
                  </li>
                  <li>
                    <a href="#">Diplomados</a>
                  </li>
                </ul>
              </nav>
            </div>
          </fieldset>
          <fieldset>
            <div class="row">
              <div className="col-md-6">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultChecked2"
                  />
                  {/*<label class="custom-control-label" for="defaultChecked2">
                  Selecionar Todos
  </label>*/}
                </div>
              </div>
              {/*<div className="col-md-6">
              <div className="right" /> <Dowloand />
</div>*/}
            </div>
            <table className="table table-hover borda-tabela-titulos table2">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">RA</th>
                  <th scope="col">Curso</th>
                  <th scope="col">
                    Semestre / <br /> Ano de Ingresso
                  </th>
                  <th scope="col">
                    Semestre / <br /> de Conclusão
                  </th>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.courses.map(data => (
                  <tr>
                    <td>
                      <img className="circle" src={user} alt="" />
                      {data.student_name}
                    </td>
                    <td>{data.ra_student}</td>
                    <td>{data.course_name}</td>
                    <td>{data.year_entry}</td>
                    <td>{data.year_conclusion}</td>
                    <td>
                      <ButtonSearch />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="float-right">
                {/*<a className="selecionar" href="tg">
                IMPRIMIR
</a>*/}
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Enable;
