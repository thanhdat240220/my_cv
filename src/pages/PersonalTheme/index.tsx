import React, { useState } from "react";
import BannerHead from "../../assets/img/theme/banner-head-personal.jpg";

function PersonalTheme() {
  const [statePage, setStatePage] = useState({
    isToggle: false,
  });

  return (
    <>
      <div id="personal-theme">
        <div className="personal-theme__container">
          <div
            className={`btn-toggle-sidebar ${
              statePage.isToggle ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setStatePage({
                isToggle: !statePage.isToggle,
              });
            }}
          >
            <span></span>
          </div>
          <div
            className={`sidebar-wrapper ${statePage.isToggle ? "open" : ""}`}
          >
            <div className="container-sidebar">
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <a href="#home">Home</a>
                </li>
                <li className="sidebar__item">
                  <a href="#about_me">About me</a>
                </li>
                <li className="sidebar__item">
                  <a href="#recent">Recent</a>
                </li>
                <li className="sidebar__item">
                  <a href="#contact_us">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <section className="section-tutorial">
            <div className="banner-head">
              {/* <img src={BannerHead} alt="banner_top" /> */}
            </div>
            <div className="tutorial-wrapper">
              <div className="container">
                <div className="bread-cum">MY_PORTFOLIO</div>
                <section className="content">
                  <div className="title index-section">
                    <span className="font-text-1">Hello</span>
                    <span className="font-text-2">, I'm</span>
                    <br />
                    {/* <span className="font-text-3">TRAN THANH DAT</span> */}
                    <br></br>
                    <span className="font-text-2">
                      I'm a frontend web developer
                    </span>
                    <br />
                  </div>
                  <div className="desc index-section">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                  <button className="btn btn-about-me">About me</button>
                </section>
                <div className="wrapper__social-list">
                  <ul className="social-list">
                    <li className="social-item">Facebook</li>
                    <li className="social-item">Twitter</li>
                    <li className="social-item">Instagram</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="about-me" id="about_me">
            <div className="container">
              <div className="wrap-title-section">
                <div className="title-section title-section__white">
                  About Me
                </div>
              </div>
              <div className="row row-about-me">
                <div className="col-6">
                  <div className="content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                    <br />
                    <br /> It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text.
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </section>
          <section>
            <div className="our-service">
              <div className="wrap-title-section">
                <div className="title-section title-section__white">
                                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default PersonalTheme;
