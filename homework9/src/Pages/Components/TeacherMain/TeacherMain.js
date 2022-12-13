import React from "react";
import "./teacher.css";
import { useGetAllTeachersQuery } from "../../../Redux/apiService";

export default function TeacherMain() {
  const { data: teachers } = useGetAllTeachersQuery();

  return (
    <div className="teachers-container">
      <h3 className="teachers-title">Meet our great team!</h3>
      <div className="teachers-list">
        {teachers?.map((teacher) => (
          <div key={teacher.id} className="teacher-content">
            <img src={teacher.photo}></img>
            <h4 className="teacher-name">
              {teacher.first_name} {teacher.last_name}
            </h4>
            <div className="teacher-info">
              <div className="info-element">
                <p className="info-element-span">
                  <span>Course:</span>
                </p>

                <div>
                  {teacher.courses.map((course) => (
                    <p className="info-element-content">{course}</p>
                  ))}
                </div>
              </div>
              <div className="info-element">
                <p className="info-element-span">
                  <span>Education:</span>
                </p>
                <p className="info-element-content">{teacher.education}</p>
              </div>
              <div className="info-element">
                <p className="info-element-span">
                  <span>About me:</span>
                </p>
                <p className="info-element-content">{teacher.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
