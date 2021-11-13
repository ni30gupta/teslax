import React from "react";
import Header from "./Header";
import "./Top.css";

function Top() {
  return (
    <div>
      <div>
        <img className="img1" src="images/MX-Hero-Desktop.jpg" alt="1" />
      </div>
      <div>
        <Header />
        <h3>Model- X</h3>
      </div>
    </div>
  );
}

export default Top;
