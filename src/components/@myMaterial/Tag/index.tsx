import React from "react";

function Tag({
  color,
  children,
  link,
}: {
  color?: string;
  children: any;
  link?: string;
}) {
  return (
    <a
      className="m-tag"
      style={{
        color: color,
        borderColor: color,
      }}
      href={link || "javascript:void(0)"}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default Tag;
