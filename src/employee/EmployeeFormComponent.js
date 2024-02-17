import React, { Component } from "react";

export default class EmployeeFormComponent extends Component{

    constructor() {
        super()
        this.state = { 
            employee : {
                firstName: '',
                middleName: '',
                lastName: '',
                panNo: '',
                aadharNo: '',
                uanNo: '',
                mobileNo: '',
                personalEmailAddress: ''
            } 
         }

        this.handleChange = this.handleChange.bind(this);
        this.employeeHandler = this.employeeHandler.bind(this);
    }

    employeeHandler = function (event) {
        event.preventDefault();
        console.log("Entered to Employee Handler")
        
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(this.state.employee)
        };

        fetch('http://localhost:8080/api/employee', requestOptions)
         .then((res) => res.json())
         .catch((error) => {
            console.log(error.message);
         });
    }

    handleChange = event => {
        var employeeObj = this.state.employee
        var id = event.target.id
        var value = event.target.value

        if(id === 'firstName'){
            employeeObj.firstName = value
        } if(id === 'middleName'){
            employeeObj.middleName = value
        } if(id === 'lastName'){
            employeeObj.lastName = value
        } if(id === 'panNo'){
            employeeObj.panNo = value
        } if(id === 'aadharNo'){
            employeeObj.aadharNo = value
        } if(id === 'uanNo'){
            employeeObj.uanNo = value
        } if(id === 'mobileNo'){
            employeeObj.mobileNo = value
        } if(id === 'personalEmailAddress'){
        employeeObj.personalEmailAddress = value
        }
        this.setState({ 
            employee: employeeObj
        })
    }

    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.employeeHandler}>
                    <div className="container">
                        <div className="panel panel-default p-2">
                            <div className="panel-heading">
                                <h5>Basic Information</h5>
                                <hr/>
                            </div>
                            <div className="panel-body">
                                <div className="form-group p-2">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" value={this.state.employee.firstName} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group  p-2">
                                    <label htmlFor="middleName">Middle Name</label>
                                    <input type="text" className="form-control" id="middleName" placeholder="Enter Middle Name" value={this.state.employee.middleName} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" value={this.state.employee.lastName} onChange={this.handleChange}/>
                                </div>  
                            </div>
                        </div>

                        <div className="panel panel-default p-2">
                            <div className="panel-heading">
                                <h5>Personal Identification Information</h5>
                                <hr/>
                            </div>
                            <div className="panel-body">
                                <div className="form-group p-2">
                                    <label htmlFor="panNo">PAN Number</label>
                                    <input type="text" className="form-control" id="panNo" placeholder="Enter PAN Number" value={this.state.employee.panNo} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="aadharNo">Aadhar Number</label>
                                    <input type="text" className="form-control" id="aadharNo" placeholder="Enter Aadhar Number" value={this.state.employee.aadharNo} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="uanNo">UAN (if exits)</label>
                                    <input type="text" className="form-control" id="uanNo" placeholder="Enter UAN" value={this.state.employee.uanNo} onChange={this.handleChange}/>            
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default p-2">
                            <div className="panel-heading">
                                <h5>Contact Details</h5>
                                <hr/>
                            </div>
                            <div className="panel-body">
                                <div className="form-group p-2">
                                    <label htmlFor="uanNo">Mobile Number</label>
                                    <input type="text" className="form-control" id="mobileNo" placeholder="Enter Mobile Number"  value={this.state.employee.mobileNo} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="personalEmailAddress">Email Address</label>
                                    <input type="text" className="form-control" id="personalEmailAddress" aria-describedby="emailHelp" placeholder="Enter Personal Email Address" value={this.state.employee.personalEmailAddress} onChange={this.handleChange}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center p-3">
                            <input className="btn btn-primary mb-2" type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}