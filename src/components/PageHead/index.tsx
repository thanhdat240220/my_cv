import React from "react";

function PageHead({ title }: { title?: string }) {
  return (
    <>
      <h3 className="page__head-title_deep">{title}</h3>
    </>
  );
}

export default PageHead;
