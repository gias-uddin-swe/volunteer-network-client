import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./AllVolunteers.css";
const AllVolunteers = () => {
  const [volunteer, setVounteer] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allVolunteer")
      .then((res) => res.json())
      .then((data) => setVounteer(data));
  }, []);

  return (
    <div>
      <h1>AllVolunteers {volunteer?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        {volunteer?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.date}</td>
              <button className="btn bg-danger p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AllVolunteers;
