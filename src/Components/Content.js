import React from "react";
import sandhya from "../Assets/sandhya.jpg";
import "./Content.css";

function Content() {
  return (
    <div className="content_container">
      <div>
        <h2>Landscape</h2>
        <div className="avatar_container">
          <img className="avatar" src={sandhya} />
          <p>
            By <span style={{ color: "orange" }}>Sandhya</span>
          </p>
        </div>
        <div className="description">
          <p>
            Hi, I am a Software Professional having 3.5 years of experience. My
            area of interest is on React and JavaScript. This is a demo project
            to showcase a Card Component having image, tag and details.
          </p>
        </div>
      </div>
      <div className="footer">
        <div>
          <i className="far fa-clock"></i> <span>1 day ago</span>
        </div>
        <div>
          <i className="far fa-comment-alt"></i> <span>10 comments</span>
        </div>
      </div>
    </div>
  );
}

export default Content;
