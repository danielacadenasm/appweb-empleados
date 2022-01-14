import React, { Component } from 'react';
import './App.css';
import EmpForm from './components/EmpForm';

const employees = [
  {
    "nameE": "Daniela Cadenas",
    "phone": "5534969798",
    "nss": "07959795548",
    "rfc": "12345678"
  },
  {
    "nameE": "Fernando Sánchez",
    "phone": "5534965253",
    "nss": "0795965984",
    "rfc": "87654321"
  },
  {
    "nameE": "Virgilio Bucio",
    "phone": "5534697677",
    "nss": "0795898437",
    "rfc": "34567890"
  },
  {
    "nameE": "Maria Castro",
    "phone": "5533597677",
    "nss": "0795898438",
    "rfc": "78567890"
  },
  {
    "nameE": "Max Bustamante",
    "phone": "5534697677",
    "nss": "0795898439",
    "rfc": "45567890"
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees
    }
    this.addEmp = this.addEmp.bind(this);
  }

  deleteEmp(index) {
    this.setState({
      employees: this.state.employees.filter((e, i) => {
        return i !== index
      })
    });
  }

  addEmp(emp) {
    this.setState({
      employees: [...this.state.employees, emp]
    })
  }

  render() {
    const employees = this.state.employees.map((emp, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
              <div className="card-title text-center mt-2 mb-3">
                <h4>{emp.nameE.toUpperCase()}</h4>
                <h6>RFC {emp.rfc}</h6>
              </div>
              <div className="mb-2">
                <p>NSS {emp.nss}</p>
                <p>TLF {emp.phone}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={()=> this.deleteEmp.bind(this, i)}>Eliminar</button>
              </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1"> Empleados </span>
          </div>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <EmpForm onAddEmp={this.addEmp}></EmpForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {employees}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
