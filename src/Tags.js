import React from "react";

function Tags(props) {
  return (
    <div className="tags">
      {props.tags.map((tag) => (
        <span className="tag">#{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
