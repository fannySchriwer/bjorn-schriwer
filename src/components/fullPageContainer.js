/** @jsx jsx */
import { jsx } from "theme-ui";

const FullPageContainer = ({ children }) => (
  <div sx={{ maxWidth: "1300px", marginX: "auto" }}>{children}</div>
);

export default FullPageContainer;
