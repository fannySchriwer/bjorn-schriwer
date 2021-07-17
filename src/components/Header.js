/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import MobileNavigation from "./MobileNavigation";

const Header = ({ logoUrl }) => (
  <header
    sx={{
      background: "white",
      position: "sticky",
      display: "flex",
      alignItems: "center",
      top: "0px",
      paddingX: ["12px", "0px"],
    }}
  >
    <div
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        justifyContent: ["center", "space-between"],
        paddingX: ["0px", "12px", "24px"],
      }}
    >
      <Link
        to="/"
        sx={{
          color: `white`,
          textDecoration: `none`,
          display: "flex",
          marginBottom: "0",
        }}
      >
        <img
          sx={{
            maxHeight: "4rem",
            marginBottom: "0px",
            padding: "6px",
          }}
          src={logoUrl}
          alt="Björn Schriwer bygg, söderort"
        />
      </Link>
      <ul
        sx={{
          alignItems: "center",
          display: ["none", "flex"],
          justifyContent: "center",
          padding: "8px 0px 12px",
          margin: "0px",
          a: {
            color: "black",
            fontWeight: "500",
            textDecoration: "none",
            paddingX: "24px",
            fontSize: "14px",
            fontFamily: "Lato, sans-serif",
            display: "inline-block",
          },
        }}
      >
        <li sx={{ listStyle: "none", marginBottom: "0" }}>
          <Link to="/about">OM OSS</Link>
        </li>
        <li sx={{ listStyle: "none", marginBottom: "0" }}>
          <Link to="/services">VÅRA TJÄNSTER</Link>
        </li>
        <li sx={{ listStyle: "none", marginBottom: "0" }}>
          <Link to="/contact">KONTAKT</Link>
        </li>
      </ul>
      <MobileNavigation />
    </div>
  </header>
);

Header.propTypes = {
  logoUrl: PropTypes.string,
};

Header.defaultProps = {
  logoUrl: ``,
};

export default Header;
