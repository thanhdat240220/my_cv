import React from "react";

function ProfileInfo() {
  return (
    <>
      <div id="information" className="page-fluid">
        <div className="information__wrapper">
          <div className="information__section-1">
            <h3 className="information__title">
              <span className="information__title-1">Hello, I'm</span>
              <br />
              <span className="information__title-2">Louie Smith</span>&nbsp;
              <span className="information__title-3">A Photographer.</span>
              <br />
              <span className="information__title-2">I Capture Life</span>
            </h3>
            <p className="information__desc">
              I am A Photographer from America Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="information__sign">Louie Smith</p>
          </div>
          <div className="information__section-2">
            <ul className="m-list">
              <li className="m-list__item">
                <span className="item__title">Full Name: </span>
                <span className="item__content"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
