import React from "react";
const About = () => {
  return (
    <div className="accordion " id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            All about NoteDesk app!
          </button>
          <div className="accordion-body h5">
            <p></p>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default About;
