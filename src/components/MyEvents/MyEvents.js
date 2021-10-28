import React, { useState } from "react";
import useFirebase from "../../Hook/useFirebase";
import { useEffect } from "react";

const MyEvents = () => {
  const { user } = useFirebase();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myEvents/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [user.email]);

  console.log(events);
  console.log(events);
  return (
    <div>
      <h1>My evtns : {events.length}</h1>
    </div>
  );
};

export default MyEvents;
