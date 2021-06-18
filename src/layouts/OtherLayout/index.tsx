import React from "react";

function OtherLayout({ children }: { children: React.ReactChild }) {
  return (
    <>
      <div className="themes-layout">
        <div className="theme-action">
          <select>
            <option>1</option>
          </select>
        </div>
        {children}
      </div>
    </>
  );
}

export default OtherLayout;
