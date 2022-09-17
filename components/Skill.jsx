import React from "react";

export default function Skill() {
  return (
    <div className="vstack mt-5 mx-5 gap-3">
      <div>
        <p
          className="text-center fw-bold align-items-center mt-5"
          style={{ color: "white", fontSize: "40px" }}
        >
          MY SKILL
        </p>
      </div>
      <div>
        <div className="zoom shadow-lg rounded-3 p-3 mx-5">
          <div className="hstack gap-4">
            <img
              src="/compcode.jpg"
              width="130"
              height="130"
              style={{ objectFit: "cover" }}
              className="rounded-circle"
            />

            <div className="vstack mt-4">
              <span
                className="fw-bold"
                style={{ color: "rgb(0, 0, 0)", fontSize: "30px" }}
              >
                Programming
              </span>
              <span style={{ color: "rgb(0, 0, 0)", fontSize: "20px" }}>
                I can write C++ , C and html.
              </span>
            </div>
          </div>
        </div>

        <div className="zoom shadow-lg rounded-3 p-3 mx-5 my-3">
          <div className="hstack gap-4">
            <img
              src="/sport.webp"
              width="130"
              height="130"
              style={{ objectFit: "cover" }}
              className="rounded-circle"
            />
            <div className="vstack mt-4">
              <span
                className="fw-bold"
                style={{ color: "black", fontSize: "30px" }}
              >
                Sports
              </span>
              <span style={{ color: "black", fontSize: "20px" }}>
                I like to play badminton, basketball and table tennis.
              </span>
            </div>
          </div>
        </div>

        <div className="zoom shadow-lg rounded-3 p-3 mx-5">
          <div className="hstack gap-4">
            <img
              src="/music.webp"
              width="130"
              height="130"
              style={{ objectFit: "cover" }}
              className="rounded-circle"
            />
            <div className="vstack mt-4">
              <span
                className="fw-bold"
                style={{ color: "rgb(0, 0, 0)", fontSize: "30px" }}
              >
                Music
              </span>
              <span style={{ color: "black", fontSize: "20px" }}>
                I can play guitar and fiddle.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
