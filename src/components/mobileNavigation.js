/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Dropdown from "./Dropdown";
import { Fragment } from "react";

const MobileNavigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Fragment>
      <Hamburger
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      <Dropdown dropdownOpen={dropdownOpen} />
    </Fragment>
  );
};

export default MobileNavigation;
