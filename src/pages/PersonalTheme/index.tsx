import React, { useState } from "react";
import BannerHead from "../../assets/img/theme/personal/bg.jpg";
import BannerAboutMe from "../../assets/img/theme/personal/bg1.jpg";
import Service1 from "../../assets/img/theme/personal/icon1.png";
import Service2 from "../../assets/img/theme/personal/icon2.png";
import Service3 from "../../assets/img/theme/personal/icon3.png";
import Service4 from "../../assets/img/theme/personal/icon4.png";
import Service5 from "../../assets/img/theme/personal/icon5.png";
import Service6 from "../../assets/img/theme/personal/icon6.png";
import Project1 from "../../assets/img/theme/personal/img1.jpg";
import Project2 from "../../assets/img/theme/personal/img2.jpg";
import Project3 from "../../assets/img/theme/personal/img3.jpg";
import Project4 from "../../assets/img/theme/personal/img4.jpg";
import Project5 from "../../assets/img/theme/personal/img5.jpg";
import Project6 from "../../assets/img/theme/personal/img6.jpg";
import Project7 from "../../assets/img/theme/personal/img7.jpg";
import Project8 from "../../assets/img/theme/personal/img8.jpg";



function PersonalTheme() {
  const [statePage, setStatePage] = useState({
    isToggle: false,
    activeIndex: "home"
  });

  const listSidebar = [
    { id: "home", text: "Home" },
    { id: "about_me", text: "About Me" },
    { id: "our_service", text: "Our Service" },
    { id: "recent_work", text: "Recent Work" },
    { id: "contact_us", text: "Contact Us" }
  ];

  const renderSidebar = () => {
    return listSidebar.map((sidebar, index) => {
      return (
        <li className="sidebar__item" key={index}>
          <a href={sidebar.id}
            className={`${statePage.activeIndex === sidebar.id ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              if (statePage.activeIndex !== sidebar.id) {
                let scrollDiv = document.getElementById(sidebar.id)?.offsetTop;
                window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
                setStatePage({
                  ...statePage,
                  isToggle: false,
                  activeIndex: sidebar.id
                })
              }
            }}
          >{sidebar.text}</a>
        </li>
      );
    });
  }

  return (
    <>
      <div id="personal-theme">
        <div className="personal-theme__container">
          <div
            className={`btn-toggle-sidebar ${statePage.isToggle ? "active" : ""
              }`}
            onClick={(e) => {
              e.preventDefault();
              setStatePage({
                ...statePage,
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
                {renderSidebar()}
              </ul>
            </div>
          </div>
          <section className="section-tutorial" id="home">
            <div className="banner-head">
              <img src={BannerHead} alt="banner_top" />
            </div>
            <div className="tutorial-wrapper">
              <div className="m-container">
                <div className="bread-cum">MY_PORTFOLIO</div>
                <section className="content">
                  <div className="title index-section">
                    <span className="font-text-1">Hello</span>
                    <span className="font-text-2">, I'm</span>
                    <br />
                    <span className="font-text-3">TRAN THANH DAT</span>
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
                  <button className="btn m-btn btn-about-me">About me</button>
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
          <section className="about-me index-section" id="about_me">
            <div className="m-container">
              <div className="wrap-title-section">
                <div className="title-section title-section__white">
                  About Me
                </div>
              </div>
              <div className="row row-about-me">
                <div className="col-md-6 col-sm-12">
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
                <div className="col-md-6 col-sm-12 bg__about-me">
                  <img src={BannerAboutMe} alt="bg-2" />
                </div>
              </div>
            </div>
          </section>
          <section className="our-service" id="our_service">
            <div className="m-container">
              <div className="wrap-title-section">
                <div className="title-section title-section__black">
                  Our service
                </div>
                <div className="sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src={Service1} alt="service_1" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-name">Web Design</h3>
                      <p className="service-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        standard dummy text ever</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src={Service2} alt="service_1" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-name">Web Design</h3>
                      <p className="service-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's Lorem Lorem Lorem
                        standard dummy text ever</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src={Service3} alt="service_1" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-name">Web Design</h3>
                      <p className="service-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem simply Ipsum has been the industry's Lorem
                        standard dummy text ever</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src={Service4} alt="service_1" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-name">Web Design</h3>
                      <p className="service-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's simply simply
                        standard dummy text ever</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src={Service5} alt="service_1" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-name">Web Design</h3>
                      <p className="service-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's simply
                        standard dummy text ever</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src={Service6} alt="service_1" />
                    </div>
                    <div className="service-content">
                      <h3 className="service-name">Web Design</h3>
                      <p className="service-desc">Lorem Ipsum is simply simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="recent-work index-section" id="recent_work">
            <div className="m-container">
              <div className="wrap-title-section">
                <div className="title-section title-section__black">
                  Recent Work
                </div>
                <div className="sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
              <div className="row project-list">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project1} alt="project_1" />
                    <h3 className="title">Project 1</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project2} alt="project_2" />
                    <h3 className="title">Project 2</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project3} alt="project_3" />
                    <h3 className="title">Project 3</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project4} alt="project_4" />
                    <h3 className="title">Project 4</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project5} alt="project_5" />
                    <h3 className="title">Project 5</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project6} alt="project_6" />
                    <h3 className="title">Project 6</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project7} alt="project_7" />
                    <h3 className="title">Project 7</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="project-item">
                    <img src={Project8} alt="project_8" />
                    <h3 className="title">Project 8</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-us" id="contact_us">
            <div className="m-container">
              <div className="wrap-title-section">
                <div className="title-section title-section__white">
                  Contact Us
                </div>
                <div className="sub-title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
              <div className="row contact-form">
                <div className="col-md-6 col-sm-12">
                  <div className="form-control">
                    <input className="form-control__input" type="text" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-control">
                    <input className="form-control__input" type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-control">
                    <input className="form-control__input" type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-control">
                    <input className="form-control__input" type="text" placeholder="Mobile No." />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-control">
                    <textarea placeholder="Message" className="form-control_textarea"></textarea>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="container-submit">
                    <button className="btn m-btn btn-submit">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="footer">
            <div className="m-container">
              <p>Copyright @2021 Tran Thanh Dat theme. All Right Reserved</p>
            </div>
          </section>
        </div >
      </div >
    </>
  );
}

export default PersonalTheme;
