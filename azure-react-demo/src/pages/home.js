import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="flags">
      <div className="page page1">
        <div className="top" />
        <div className="center">
          <h1 className="words">Hello</h1>
          <Link to="/page1">Click to go to Page 1</Link>
        </div>
        <div className="bottom" />
      </div>
      <div className="page page2">
        <div className="top" />
        <div className="center">
          <h1 className="words">World</h1>
          <Link to="/page2">Click to go to Page 2</Link>
        </div>
        <div className="bottom" />
      </div>
    </div>
  );
};

export default Page1;