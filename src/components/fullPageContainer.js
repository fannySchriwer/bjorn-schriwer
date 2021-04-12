/** @jsx jsx */
import { jsx } from "theme-ui";

const FullPageContainer = ({ children }) => (
  <div sx={{ maxWidth: "1180px", marginX: "auto" }}>{children}</div>
);

export default FullPageContainer;
