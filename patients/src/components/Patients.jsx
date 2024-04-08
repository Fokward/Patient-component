import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from "react-bootstrap/Table"
import { PatientService } from '../services/Services';
import { Link } from "react-router-dom";





export default function Patients() {
    
    let[state,setState]=useState({
        patients:[]
});

useEffect(()=>{
    PatientService.getServices().then((response)=>{
        console.log(response.data.data)
        setState({
            ...state,
            patients:response.data.data
            
        })
       
    }).catch((err)=>{
        console.log(err)
    })
},[])
  return (
    <div>
        <Container className='mt-3'>
        <Col>
        <Row>
            <h2>List of Patients</h2>
        </Row>
        </Col>
        <Col>
        <Row>
        <Table striped border hover className='shadow-lg'>
                   <thead>
                   <tr>
                       <th>Registration Number</th>
                        <th>Patient Name</th>
                        <th>Guarantor Name</th>
                        <th>Date of Birth</th>
                        <th>Region</th>
                        <th>Ward</th>
                        
                    </tr>
                   </thead>
                   <tbody>
                      {
                        //state.Patients.length > 0 &&
                    state.patients.map(patient=>{
                           return(
                            <tr key={patient.Registration_ID}>
                            <td>{patient.Patient_Name}</td>
                            <td>{patient.Guarantor_Name}</td>
                            <td>{patient.Date_Of_Birth}</td>
                            <td>{patient.Region}</td>
                            <td>{patient.Ward}</td>
                        </tr>
                           )
                        })
                      }
                   </tbody>
                  </Table>
        </Row>
        </Col>
        </Container>
        
      
    </div>
  )
}
