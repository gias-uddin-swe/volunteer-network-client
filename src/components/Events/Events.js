import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./Events.css";
const Events = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allEvents")
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, []);
  return (
    <div className="container">
      <h1>Events {event?.length}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Event Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Action</th>
          </tr>
        </thead>
        {event?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.title}</td>
              <td>{pd.description}</td>
              <td>{pd.image}</td>
              <button className="btn bg-danger p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Events;
