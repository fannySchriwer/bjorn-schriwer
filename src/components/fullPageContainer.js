/** @jsx jsx */
import { jsx } from "theme-ui";

const FullPageContainer = ({ children }) => (
  <div sx={{ maxWidth: "1220px", marginX: "auto" }}>{children}</div>
);

export default FullPageContainer;
