import React from "react";

export default function Profile() {
  return (
    <div className="vstack mt-5 mx-5 gap-3">
      <div>
        <p
          className="text-center fw-bold align-items-center"
          style={{ color: "white", fontSize: "40px" }}
        >
          INTRODUCION
        </p>
      </div>
      <div className="hstack gap-5 mx-5">
        <img
          src="/myphoto.jpg"
          width="150"
          height="150"
          style={{ objectFit: "cover" }}
          className="rounded float-left"
        />
        <div className="vstack mt-3">
          <span
            className="fw-bold"
            style={{ color: "rgb(0, 0, 0)", fontSize: "30px" }}
          >
            Thidayu Peaungtham
          </span>
          <span style={{ color: "black", fontSize: "20px" }}>
            Hi, My name is Thidayu. My nickname is Tan. I have 1 brother. I
            graduated from Ratwinit Bangkaeo School, I'm studing at Chiang mai
            university. I used to make a project that created RPG games by using
            C++ computer language and scratch. My hobby is playing games and
            painting.
          </span>
        </div>
      </div>
    </div>
  );
}
