import React from "react";
import "./AddVolunteer.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";

const AddVolunteer = () => {
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addVolunteer", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1 className="mt-5 text-center text-info">
        Please register As a Volunteer
      </h1>
      <div className="login-box w-25 m-auto mt-5">
        <div className="event-box border border d-flex justify-content-center align-items-center">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2"
              />
              <br />

              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("date", { required: true })}
                placeholder="date"
                defaultValue={new Date()}
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("description", { required: true })}
                placeholder="Description"
                className="p-2 m-2"
              />
              <br />
              <input
                {...register("books", { required: true })}
                placeholder="Organize books"
                className="p-2 m-2"
              />
              <br />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="btn btn-info w-50" />
            </form>
            <p className="m-2 mb-2">
              already have account?{" "}
              <Link to="/login">
                <span className="text-danger">create account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;
