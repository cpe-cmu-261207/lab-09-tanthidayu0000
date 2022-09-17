import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ maxwidth: "100%" }} className="mx-auto">
      <div className="d-flex justify-content-center gap-5 fs-4 mb-5">
        <Link href="/">
          <a
            style={{ color: "blue", fontSize: "20px" }}
            target="_self"
            button
            className="btn btn-outline-warning"
          >
            Home
          </a>
        </Link>
        <Link href="/Experience">
          <a
            style={{ color: "blue", fontSize: "20px" }}
            target="_self"
            button
            className="btn btn-outline-warning"
          >
            Experience
          </a>
        </Link>
        <Link href="/Contact">
          <a
            style={{ color: "blue", fontSize: "20px" }}
            target="_self"
            button
            className="btn btn-outline-warning"
          >
            Contact
          </a>
        </Link>
        <Link href="/lab-07">
          <a
            style={{ color: "blue", fontSize: "20px" }}
            target="_self"
            button
            className="btn btn-outline-warning"
          >
            Lab-07
          </a>
        </Link>
      </div>
    </div>
  );
}
