import React from "react";
import { IButton } from "~/@interface/button";

function Button({ children, type, icon, ...name }: IButton) {
  return (
    <>
      <button {...name} className={`btn btn-${type || "default"}`}>
        <div className="btn-wrap">
          <span className="icon">{icon}</span>
          <span className="text">{children}</span>
        </div>
      </button>
    </>
  );
}

export default Button;
