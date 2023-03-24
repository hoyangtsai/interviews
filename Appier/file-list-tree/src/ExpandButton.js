import React from "react";
import "./ExpandButton.css";

const ExpandButton = ({ expanded = false, ...buttonProps }) => {
  return (
    <button className="expand-button" {...buttonProps}>
      [{expanded ? "-" : "+"}]
    </button>
  );
};

export default ExpandButton;
