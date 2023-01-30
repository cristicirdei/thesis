import React from "react";
import { Link } from "react-router-dom";

import arrow from "../resources/arrow-right-solid.svg";

const Guide = () => {
  return (
    <div className="page">
      <h1>Guide</h1>
      <div className="guide-container">
        <a
          href="https://scrumguides.org/scrum-guide.html#product-owner"
          target="_blank"
          rel="noreferrer"
          className="guide-tile"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div>
            <h1>
              The Product Ownership Practice{" "}
              <span>
                <img className="img-span" src={arrow} alt="arrow"></img>
              </span>
            </h1>
            <p>About Product Ownership and what it means.</p>
          </div>
        </a>

        <a
          href="https://practicelibrary.ivarjacobson.com/sites/default/files/embedded-practices/Product_Ownership_Essentials_HTML_guidelines"
          target="_blank"
          rel="noreferrer"
          className="guide-tile"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div>
            <h1>
              Product Ownership Essentials{" "}
              <span>
                <img className="img-span" src={arrow} alt="arrow"></img>
              </span>
            </h1>
            <p>
              Browse the Product Ownership Essentials and become familiar with
              the language.
            </p>
          </div>
        </a>

        <Link
          to={"/guide"}
          className="guide-tile"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div>
            <h1>
              How to use the app{" "}
              <span>
                <img className="img-span" src={arrow} alt="arrow"></img>
              </span>
            </h1>
            <p>Use the app to help you apply the practice.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Guide;
