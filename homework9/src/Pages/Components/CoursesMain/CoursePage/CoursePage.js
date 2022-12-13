import React, { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../img/logo-SA.png";
import "./coursepage.css";

export default function CoursePage() {
  const { state } = useLocation();
  const {
    courseName,
    courseImg,
    courseLvl,
    courseDur,
    courseDecr,
    coursePrice,
  } = state;

  const [description, setDescription] = useState([]);
  useEffect(() => {
    setDescription(courseDecr);
    console.log(description);
  }, [courseDecr]);

  const navigate = useNavigate();

  return (
    <>
      <div className="header_container">
        <Link to="/">
          <img className="header_logo" src={logo} />
        </Link>
        <button
          className="nav_menu_bttn back-button"
          onClick={() => navigate(-1)}
        >
          {" "}
          Back
        </button>
      </div>
      <div className="course-page-container">
        <div className="course-page-left">
          <h3 className="course-title">{courseName}</h3>
          <div className="course-page-info">
            <span className="course-page-lvl-dur">Level:</span>
            <p className="course-page-lvl-dur-info">{courseLvl}</p>
          </div>
          <div className="course-page-info">
            <span className="course-page-lvl-dur">Duration:</span>
            <p className="course-page-lvl-dur-info">{courseDur}</p>
          </div>
          <div className="course-page-full-decription">
            <h4>
              <strong>You will learn:</strong>
            </h4>
            <ul>
              {description?.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
          <div className="course-page-price">
            <span className="price">Price:</span>
            <span className="course-page-price-number">${coursePrice}</span>
          </div>
          <button
            onClick={() =>
              navigate("/apply", { state: { courseName: courseName } })
            }
            className="course-page-apply"
          >
            Apply Now
          </button>
        </div>
        <img src={courseImg}></img>
      </div>
      <Footer></Footer>
    </>
  );
}
