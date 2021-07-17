/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Dropdown = ({ dropdownOpen }) => {
  return (
    <div
      sx={{
        backgroundColor: "white",
        position: "fixed",
        zIndex: "2",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        display: "flex",
        transform: dropdownOpen ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div
        sx={{
          zIndex: 4,
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          a: {
            color: "black",
            textDecoration: "none",
            marginY: "32px",
            fontSize: "24px",
          },
        }}
      >
        <Link
          sx={{ fontFamily: "Lato, sans-serif", fontSize: "14px" }}
          to="/about"
        >
          OM OSS
        </Link>
        <Link
          sx={{ fontFamily: "Lato, sans-serif", fontSize: "14px" }}
          to="/services"
        >
          VÅRA TJÄNSTER
        </Link>
        <Link
          sx={{ fontFamily: "Lato, sans-serif", fontSize: "14px" }}
          to="/contact"
        >
          KONTAKT
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
