import React,{Component} from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import axios from "axios";

export default class Buttons extends Component {
constructor(){
  super();
  this.state={
    users : [],
  }
}
componentDidMount(){
  axios.get("http://localhost:3000/admin/api/getUsers")
  .then(response=>{
    console.log(response.data);
    this.setState({
      users : response.data,
    })
  })
}
handleDelete = id => {
  axios.delete(`http://localhost:3000/admin/api/deleteUsers/${id}`)
  .then(response=>{
    console.log(response.data)
  })
  this.setState({
    users : this.state.users.filter(user=>user.id!==id)
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
          <CardTitle tag="h5">Users Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of all of the users
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>New Users</th>

                <th>Phone Number</th>

              </tr>
            </thead>
            <tbody>
              {this.state.users.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
               
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.userName}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.phoneNumber}</td>
                  <td>
                  
                  </td>

                  <td>{tdata.budget}</td>
                  <button style={style} onClick={()=>this.handleDelete(tdata.id)} >Delete user</button>
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