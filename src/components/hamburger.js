/** @jsx jsx */
import { jsx } from "theme-ui";

const Hamburger = ({ dropdownOpen, setDropdownOpen }) => {
  const burgerLine = (action) => {
    let animation = {};
    if (dropdownOpen) {
      switch (action) {
        case "rotateCW":
          animation.transform = "rotate(-45deg) scaleY(1)";
          break;
        case "rotateCCW":
          animation.transform = "rotate(45deg) scaleY(1)";
          break;
        case "fade":
          animation.backgroundColor = "transparent";
          break;
        default:
      }
    }
    return {
      margin: "auto",
      display: "block",
      height: "3px",
      backgroundColor: "black",
      borderRadius: "2px",
      ":first-of-type": {
        width: "25px",
        transformOrigin: "100%",
      },
      ":nth-of-type(2)": {
        width: "25px",
        marginY: "6px",
      },
      ":nth-of-type(3)": {
        width: "25px",
        transformOrigin: "100%",
      },
      transition: "transform 0.5s",
      ...animation,
    };
  };

  const lineContainer = (action) => {
    let containerAnimation = {};
    if (dropdownOpen) {
      switch (action) {
        case "moveRight":
          containerAnimation.transform = "translate(-4px, 0)";
          break;
        default:
      }
    }
    return {
      transition: "transform 0.5s",
      ...containerAnimation,
    };
  };
  return (
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      sx={{
        cursor: "pointer",
        backgroundColor: "white",
        border: "none",
        height: "30px",
        width: "30px",
        borderRadius: 2,
        boxShadow: "hover",
        marginLeft: "auto",
        zIndex: 99,
        padding: "0px",
        marginTop: "10px",
        display: ["block", "none"],
      }}
    >
      <div sx={lineContainer("moveRight")}>
        <span sx={burgerLine("rotateCW")} />
        <span sx={burgerLine("fade")} />
        <span sx={burgerLine("rotateCCW")} />
      </div>
    </button>
  );
};

export default Hamburger;
