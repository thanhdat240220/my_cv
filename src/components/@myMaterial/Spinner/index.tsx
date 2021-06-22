import React from "react";

function Spinner() {
  return (
    <>
      <div className="spinner-loading">
        <div className="spinner-wrapper">
          <div
            style={{
              animationDelay: "0.2s",
            }}
          ></div>
          <div
            style={{
              animationDelay: "0.4s",
            }}
          ></div>
          <div
            style={{
              animationDelay: "0.6s",
            }}
          ></div>
          <div
            style={{
              animationDelay: "0.8s",
            }}
          ></div>
          <div
            style={{
              animationDelay: "1s",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Spinner;
