import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import React from "react";
import axios from "axios";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

class ProjectTables extends React.Component {
  constructor(){
    super();
    this.state={
      users :[],
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

  
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Users Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the new users
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
                  <button onClick={()=>this.handleDelete(tdata.id)} >Delete user</button>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
};

export default ProjectTables;
