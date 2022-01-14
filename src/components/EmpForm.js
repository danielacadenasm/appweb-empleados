import React, { Component } from 'react';

class EmpForm extends Component {
  constructor () {
    super();
    this.state = {
      nameE: '',
      phone: '',
      nss: '',
      rfc: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddEmp(this.state);
    this.setState({
      nameE: '',
      phone: '',
      nss: '',
      rfc: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    //console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <h5 className="mt-3">NUEVO EMPLEADO</h5>
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group mb-2">
            <input
              type="text"
              name="nameE"
              className="form-control"
              value={this.state.nameE}
              onChange={this.handleInputChange}
              placeholder="nombre"
              />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              name="rfc"
              className="form-control"
              value={this.state.rfc}
              onChange={this.handleInputChange}
              placeholder="RFC"
              />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              name="nss"
              className="form-control"
              value={this.state.nss}
              onChange={this.handleInputChange}
              placeholder="NSS"
              />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              name="phone"
              className="form-control"
              value={this.state.phone}
              onChange={this.handleInputChange}
              placeholder="teléfono"
              />
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    )
  }

}

export default EmpForm;