import React from "react";
import { ILink } from "../../../@interface/link";

function LinkIcon({ children, icon }: ILink) {
  return (
    <>
      <a className="link-icon">
        <span className="icon">{icon}</span>
        <span>{children}</span>
      </a>
    </>
  );
}

export default LinkIcon;
