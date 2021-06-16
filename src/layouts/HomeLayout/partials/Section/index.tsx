import { Container } from "@material-ui/core";
import React from "react";

function Section({ children }: { children: React.ReactChildren | string }) {
  return (
    <>
      <div className="section-page">
        {children}
      </div>
    </>
  );
}

export default Section;
