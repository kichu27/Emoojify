import React from "react";

function Cards(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.em}
        </span>
        <span>{props.nm}</span>
      </dt>
      <dd>{props.info}</dd>
    </div>
  );
}

export default Cards;
