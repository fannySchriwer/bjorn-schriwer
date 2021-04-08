/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const { datoCmsHeroSection } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          id
          logo {
            url
          }
          backgroundImage {
            url
          }
        }
      }
    `
  );
  return (
    <div>
      <Header logoUrl={datoCmsHeroSection.logo.url} />
      <main sx={{ minHeight: "70vh", maxWidth: "1130px", marginX: "auto" }}>
        {children}
      </main>
      <footer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          maxWidth: "1130px",
          marginX: "auto",
        }}
      >
        <div>© {new Date().getFullYear()}</div>
        <div>
          <h4>Här finns vi</h4>
        </div>
        <div>
          <h4>Kontakta oss</h4>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
