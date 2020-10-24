import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="page page2">
      <div className="top" />
      <div className="center">
        <h1 className="words">World</h1>
        <div className="otherLinks">
          <Link to="/page1">Page 1</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="bottom" />
    </div>
  );
};

export default Page2;