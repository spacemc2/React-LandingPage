import React from "react";

const cardStyle = {
  width: "18rem",
};

const Card = (props) => {
  return (
    <div class="card my-2">
      <img src={props.link} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.category}</h5>
        <p class="card-text">{props.text}</p>
        <a
          href="https://ce.mdc.edu/search/publicCourseSearchDetails.do?method=load&courseId=1297972&selectedProgramAreaId=1017613&selectedProgramStreamId=1017763"
          class="btn btn-primary"
        >
          Let's get it!
        </a>
      </div>
    </div>
  );
};

export default Card;
