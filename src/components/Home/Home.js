import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://localhost:5000/searchEvent?search=${search}`)
      .then((res) => res.json())
      .then((result) => setEvents(result));

    console.log("hello bro");
  };

  console.log(search);
  return (
    <div>
      <div className="text-center mt-5">
        <h1>I Grow By HELPING PEOPLE IN NEED</h1>
        <div className="input-box">
          <input onChange={handleInput} type="text" className="p-2 m-3" />
          <button onClick={handleSearch} className="btn btn-primary m-1">
            Search
          </button>
        </div>
      </div>
      <div className="events-container">
        <div className="row container">
          {events?.map((pd) => (
            <div className="col-md-4">
              <div className="event border border">
                <div className="event-img">
                  <img className="w-100" src={pd.image} alt="" />
                </div>
                <div
                  style={{ backgroundColor: pd?.EventColor }}
                  className="title-container p-2 "
                >
                  <h4>{pd.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
