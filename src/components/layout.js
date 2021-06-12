/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const { datoCmsHeroSection, datoCmsFooter } = useStaticQuery(
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
        datoCmsFooter {
          email
          phone
          adress
          orgNumber
          postCode
        }
      }
    `
  );
  return (
    <div>
      <Header logoUrl={datoCmsHeroSection.logo.url} />
      <main sx={{ minHeight: "70vh" }}>{children}</main>
      <footer
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "24px",
          maxWidth: "1130px",
          marginX: "auto",
        }}
      >
        <div>
          <h4>Kontakta oss</h4>
          <Styled.p sx={{ marginBottom: "6px" }}>
            {datoCmsFooter.email}
          </Styled.p>
          <Styled.p sx={{ marginBottom: "6px" }}>
            {datoCmsFooter.phone}
          </Styled.p>
          <Styled.p sx={{ marginBottom: "6px" }}>
            Org.nr: {datoCmsFooter.orgNumber}
          </Styled.p>
        </div>
        <div>
          <h4>Här finns vi</h4>
          <Styled.p sx={{ marginBottom: "6px" }}>
            {datoCmsFooter.adress}
          </Styled.p>
          <Styled.p sx={{ marginBottom: "6px" }}>
            {datoCmsFooter.postCode}
          </Styled.p>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
