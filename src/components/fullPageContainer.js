/** @jsx jsx */
import { jsx } from "theme-ui";

const FullPageContainer = ({ children }) => (
  <div sx={{ maxWidth: "1130px", marginX: "auto" }}>{children}</div>
);

export default FullPageContainer;
