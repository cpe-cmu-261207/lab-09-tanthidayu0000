import React from "react";
import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <div className="squared rounded-3 p-5 mt-5 mx-5 mb-5">
      <Navbar />
      <div className="vstack mt-5 mx-5 gap-3 align-items-center">
        <div>
          <p
            className="text-center fw-bold"
            style={{ color: "white", fontSize: "40px" }}
          >
            MY EXPIRENCE
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="hstack gap-5 p-3">
            <div className="card zoom" style={{ width: "18rem" }}>
              <img
                src="/power.jpg"
                width="150px"
                height="200px"
                className="card-img-top"
              />
              <div className="card-body card text-white bg-dark">
                <h5 className="card-title">PTT Project</h5>
                <p className="card-text">
                  I joined the project that called "Small power but can change
                  the world year 3" and I won at the 3rd place, The winners
                  recieved the ticket to Japan for studied about the technology.
                </p>
              </div>
            </div>

            <div className="card zoom" style={{ width: "18rem" }}>
              <img
                src="/project1.jpg"
                width="150px"
                height="200px"
                className="card-img-top"
              />
              <div className="card-body card text-white bg-dark">
                <h5 className="card-title">Basic Computer Project</h5>
                <p className="card-text">
                  I crated the project that called "Virus Survival" by using
                  scratch with my friends.it was a very intereting game the game
                  is about survival game that must cleared the mission.
                </p>
              </div>
            </div>

            <div className="card zoom" style={{ width: "18rem" }}>
              <img
                src="/project2.jpg"
                width="150px"
                height="200px"
                className="card-img-top"
              />
              <div className="card-body card text-white bg-dark">
                <h5 className="card-title">Computer Programming Project</h5>
                <p className="card-text">
                  I crated the project that called "Mystery World" by using c++
                  computer language with my friends and it had many problems but
                  finally we can soled it an this game happened.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
