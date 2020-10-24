import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="page page1">
      <div className="top" />
      <div className="center">
        <h1 className="words">Hello</h1>
        <div className="otherLinks">
          <Link to="/page2">Page 2</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="bottom" />
    </div>
  );
};

export default Page1;