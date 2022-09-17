import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="squared rounded-3 p-5 mt-5 mx-5 mb-5">
      <Navbar />
      <div className="vstack mt-5 mx-5 gap-3">
        <div>
          <p
            className="text-center fw-bold align-items-center"
            style={{ color: "white", fontSize: "40px" }}
          >
            MY CONTACT
          </p>
        </div>
        <div className="hstack gap-5 mx-auto justify-content-center">
          <img
            src="/myphoto.jpg"
            width="200"
            height="200"
            style={{ objectFit: "cover" }}
            className="rounded-circle"
          />
          <div className="vstack gap-3" style={{ color: "rgb(70, 70, 15)" }}>
            <span>Name : THIDAYU PEAUNGTHAM</span>
            <span>Adress : 38/9 moo6 bangpeenoi samutprakarn 10560</span>
            <div className="hstack">
              <span>Facebook : </span>
              <a
                target="_blank"
                href="https://www.facebook.com/thidayu.peaungtham"
              >
                https://www.facebook.com/thidayu.puegthum
              </a>
            </div>
            <div>
              <span>Email :</span>
              <Link href={"mailto:thidayu_p@cmu.ac.th"}>
                <a>thidayu_p@cmu.ac.th</a>
              </Link>
            </div>
            <span>Phone : 095-7764403</span>
          </div>
        </div>
      </div>
    </div>
  );
}
