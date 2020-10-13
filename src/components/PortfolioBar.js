// import React from "react";
// import Contact from "./Contact";
// import "../componentsStyles/PortfolioBar.css";
// import { Button } from "reactstrap";

// const PortfolioBar = () => {
//   return (
//     <div id="portfolioBar">
//       <span>사진</span>
//       <span>Portfolio</span>
//       <Button outline color="secondary">
//         Contact
//       </Button>
//     </div>
//   );
// };

// export default PortfolioBar;

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const PortfolioBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="portfolioBar" light expand="md">
        <NavbarBrand href="/">사진위치</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">해당주소로 이동하는</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://hyun0310woo.tistory.com/" target="_blank">
                Blog
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <h3>Contact</h3>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default PortfolioBar;
