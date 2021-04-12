/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import MobileNavigation from "./mobileNavigation";

const Header = ({ logoUrl }) => (
  <header
    sx={{
      background: "white",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 16px",
      position: "sticky",
      top: "0px",
    }}
  >
    <Link
      to="/"
      sx={{
        color: `white`,
        textDecoration: `none`,
        display: "flex",
      }}
    >
      <img
        sx={{ maxHeight: "3.5rem", marginBottom: "0", padding: "8px" }}
        src={logoUrl}
        alt="Björn schriwer bygg"
      />
    </Link>
    <div
      sx={{
        alignItems: "center",
        display: ["none", "flex"],
        a: {
          color: "black",
          fontWeight: "500",
          textDecoration: "none",
          paddingX: "12px",
          fontFamily: "Roboto, sans-serif",
        },
      }}
    >
      <Link
        sx={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
        to="/about"
      >
        OM OSS
      </Link>
      <Link
        sx={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
        to="/services"
      >
        VÅRA TJÄNSTER
      </Link>
      <Link
        sx={{ fontFamily: "Roboto, sans-serif", fontSize: "14px" }}
        to="/contact"
      >
        KONTAKT
      </Link>
    </div>
    <MobileNavigation />
  </header>
);

Header.propTypes = {
  logoUrl: PropTypes.string,
};

Header.defaultProps = {
  logoUrl: ``,
};

export default Header;
