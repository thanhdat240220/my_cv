import React, { useEffect, useState } from "react";
import { ICarousel } from "../../../@interface/carousel";

// var i = 0;

function Carousel() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="main-carousel">
        <div className="carousel-wrapper">
          <ul className="carousel__list">
            <li className="carousel__list__item">
              <div className="card-glassmorphism">
                <div className="card__face face-front">
                  <div className="front-container">
                    <img src="https://my-quizz-greenwich.web.app/static/media/logo.d6b16a3f.png" />
                    <div className="front-content">
                      <h3 className="title">Web Demo</h3>
                    </div>
                  </div>
                </div>
                <div className="card__face face-back">
                  <div className="back-container">
                    <div className="desc">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                  <button className="btn btn-more">More Detail</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Carousel;
