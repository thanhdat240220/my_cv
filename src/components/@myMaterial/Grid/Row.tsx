import React from "react";
import { IRow } from "~/@interface/row";

function Row({ children, gutter, ...rest }: IRow) {
  return (
    <>
      <div
        className={`row 
        ${
          gutter &&
          (gutter?.length && gutter?.length === 1
            ? `gutter-lr-${gutter[0]} gutter-tb-${gutter[0]}`
            : `gutter-lr-${gutter[0]} gutter-tb-${gutter[1]}`)
        }`}
        {...rest}
      >
        {children}
      </div>
    </>
  );
}

export default Row;
