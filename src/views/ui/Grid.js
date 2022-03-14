import axios from "axios";
import React, {Component} from "react";
import "../../layouts/Sidebar";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import Sidebar from "../../layouts/Sidebar";

export default class Grid extends Component {
  constructor(){
    super();
    this.state={
      docs : []
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/admin/api/getDoctors")
    .then(response=>{
      console.log(response.data);
      this.setState({
        docs : response.data,
      })
    })
  }
  handleDelete = id => {
    axios.delete(`http://localhost:3000/admin/api/deleteDocs/${id}`)
    .then(response=>{
      console.log(response.data)
    })
    this.setState({
      docs : this.state.docs.filter(doc=>doc.id!==id),
    })
  }
  render(){

    let style= {
      backgroundColor : "#008CBA",
      border : "none",
      color:"white",
      padding:"15px 32px",
      textAlign : "center",
      textDecoration : "none",
      display:"inline-block",
      fontSize : "16px",
    }
    return(
      
<div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Doctors Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of all of the doctors
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Doctors </th>
                <th>Picture  </th>

                <th>Phone Number</th>
                <th>Location</th>

              </tr>
            </thead>
            <tbody>
              {this.state.docs.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
               
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.firstName} {tdata.lastName}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <img src={tdata.profilePicture} alt=""/>
                  <td>{tdata.phoneNumber}</td>
                  <td>{tdata.location}</td>
                  <td>
                  
                  </td>

                  <td>{tdata.budget}</td>
                  <button style={style} onClick={()=>this.handleDelete(tdata.id)} >Delete Doctor</button>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
    )
  }
}