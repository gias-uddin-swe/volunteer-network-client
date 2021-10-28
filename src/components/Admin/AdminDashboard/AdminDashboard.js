import React, { useState } from "react";
import AddEvents from "../../AddEvents/AddEvents";
import "./AdminDashboard.css";
import Events from "./../../Events/Events";
import AllVolunteers from "./../AllVolunteers/AllVolunteers";

const AdminDashboard = () => {
  const [control, setControl] = useState("addEvent");
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("volunteers")}
                    className="admin-menu p-2"
                  >
                    All Volunteers
                  </li>
                  <li
                    onClick={() => setControl("addEvent")}
                    className="admin-menu p-2"
                  >
                    Add Events
                  </li>
                  <li
                    onClick={() => setControl("manage")}
                    className="admin-menu p-2"
                  >
                    Manage Events
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              <div className="right-part ">
                {control === "addEvent" && <AddEvents></AddEvents>}
                {control === "manage" && <Events></Events>}
                {control === "volunteers" && <AllVolunteers></AllVolunteers>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
