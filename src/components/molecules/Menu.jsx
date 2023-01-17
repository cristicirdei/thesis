import React from "react";
import MenuButton from "../atoms/MenuButton";

const Menu = () => {
  return (
    <div className="col-2 menu">
      <h1 className="dash-title">Dashboard</h1>
      <>
        <MenuButton
          link="/guide"
          page="Guide"
          description="A guide to Essence and Product Ownership"
        ></MenuButton>
        <MenuButton
          link="/activities"
          page="Activities"
          description="Activities of Product Ownership Essentials"
        ></MenuButton>
        <MenuButton
          link="/competencies"
          page="Competencies"
          description="Competencies of Product Ownership Essentials"
        ></MenuButton>
        <MenuButton
          link="/organization"
          page="Organization"
          description="Your Team and Project"
        ></MenuButton>
      </>
    </div>
  );
};
export default Menu;
