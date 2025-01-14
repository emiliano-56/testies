import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature9,
  ProfileAvatar02,
  ProfileAvatar04,
  ProfileAvatar05,
  ProfileAvatar06,
} from "../../imagepath";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import img from "./automotive.png";

export default function AutomativeCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setSlidesToShow(1);
      } else if (width >= 768 && width <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const slider = useRef();
  return (
    <section className="featured-section-color automotive_card_section ">
      <div className="container">
        <div className="row align-items-center">
          <div className="featuresection_infodev">
            <h4 className="featuresection_header">Automative</h4>
            <button className="featuresection_btn">View All</button>
          </div>

          <div className="feature-section-info">
            <ul className="info-list">
              <li>Car For Sales</li>
              <li>Car For Sales</li>
              <li>Car For Sales</li>
              <li>Car For Sales</li>
              <li>Car For Sales</li>
            </ul>
          </div>

          <div className="featureline">
            <div className="highlighter"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              <Slider
                ref={slider}
                {...settings}
                className=" featured-slider grid-view"
              >
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/index">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <h6>
                          <Link to="/automative">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>
                            Education | Education | Education
                          </p>
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/automative">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        {/* <div className="blogfeaturelink"> */}
                        {/* <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div> */}
                        {/* <div className="blog-features"> */}
                        {/* <Link to="#"> */}
                        {/* <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span> */}
                        {/* </Link> */}
                        {/* </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span> */}
                        {/* </div> */}
                        {/* </div> */}
                        <h6>
                          <Link to="/index">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>
                            Education | Education | Education
                          </p>
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/index">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <h6>
                          <Link to="/index">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>
                            Education | Education | Education
                          </p>
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/index">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        {/* <div className="blogfeaturelink"> */}
                        {/* <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div> */}
                        {/* <div className="blog-features"> */}
                        {/* <Link to="#"> */}
                        {/* <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span> */}
                        {/* </Link> */}
                        {/* </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span> */}
                        {/* </div> */}
                        {/* </div> */}
                        <h6>
                          <Link to="/service-details">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>
                            Education | Education | Education
                          </p>
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/index">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        {/* <div className="blogfeaturelink"> */}
                        {/* <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div> */}
                        {/* <div className="blog-features"> */}
                        {/* <Link to="#"> */}
                        {/* <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span> */}
                        {/* </Link> */}
                        {/* </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span> */}
                        {/* </div> */}
                        {/* </div> */}
                        <h6>
                          <Link to="/service-details">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>
                            Education | Education | Education
                          </p>
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/index">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        {/* <div className="blogfeaturelink"> */}
                        {/* <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div> */}
                        {/* <div className="blog-features"> */}
                        {/* <Link to="#"> */}
                        {/* <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span> */}
                        {/* </Link> */}
                        {/* </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span> */}
                        {/* </div> */}
                        {/* </div> */}
                        <h6>
                          <Link to="/service-details">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>
                            Education | Education | Education
                          </p>
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/index">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        {/* <div className="blogfeaturelink"> */}
                        {/* <div className="grid-author">
                            <img src={ProfileAvatar02} alt="author" />
                          </div> */}
                        {/* <div className="blog-features"> */}
                        {/* <Link to="#"> */}
                        {/* <span>
                                {" "}
                                <i className="fa-regular fa-circle-stop"></i>{" "}
                                Education
                              </span> */}
                        {/* </Link> */}
                        {/* </div>
                          <div className="blog-author text-end">
                            <span>
                              {" "}
                              <i className="feather-eye"></i>4000{" "}
                            </span> */}
                        {/* </div> */}
                        {/* </div> */}
                        <h6>
                          <Link to="/service-details">Mercedez Benz</Link>
                        </h6>
                        <div className="location-info">
                          <p style={{ fontSize: "0.7rem" }}>
                            Education | Education | Education
                          </p>
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card aos" data-aos="fade-up">
                  <div className="blog-widget">
                    <div className="blog-img">
                      <Link to="/service-details">
                        <img src={img} className="img-fluid" alt="blog-img" />
                      </Link>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <h6>
                          <Link to="/service-details">
                            Gulfsteam Ameri-lite
                          </Link>
                        </h6>
                        <div className="location-info">
                          Education | Education
                        </div>
                        <div className="blog-location-details">
                          <div
                            className="location-info"
                            style={{ marginTop: "1rem" }}
                          >
                            {/* <i className="feather-map-pin"></i> */}
                            Los Angeles
                          </div>
                          {/* <div className="location-info">
                            <i className="fa-regular fa-calendar-days"></i> 06
                            Oct, 2022
                          </div> */}
                        </div>
                        <div className="amount-details">
                          <div className="amount">
                            <span
                              className="validrate"
                              style={{ fontFamily: "Inter" }}
                            >
                              $350
                            </span>
                            {/* <span>$450</span> */}
                          </div>
                          <div
                            className="ratings"
                            style={{ fontFamily: "Inter" }}
                          >
                            {/* <span>4.7</span>  */}1 DAYS AGO
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
