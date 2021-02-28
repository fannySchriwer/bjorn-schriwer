/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ logoUrl }) => (
  <header
    sx={{
      background: `transparent`,
    }}
  >
    <div>
      <h1 sx={{ margin: 0, textAlign: `center`, position: "fixed", top: "0" }}>
        <Link
          to="/"
          sx={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            sx={{ maxHeight: "3rem", marginBottom: "0", padding: "8px" }}
            src={logoUrl}
            alt="Björn schriwer bygg"
          />
        </Link>
      </h1>
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
