import React from "react";

function Logo() {
  return (
    <>
      <div className="container-avatar">
        <div
          className="avatar"
          style={{
            backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJagRSWL5BoUFXB8L7Sy8IdpAl4AgCFlUShA&usqp=CAU"})`,
          }}
        ></div>
        <h3 className="user-name">JEFF JACK</h3>
      </div>
    </>
  );
}

export default Logo;
