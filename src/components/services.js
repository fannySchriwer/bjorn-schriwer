/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const Services = () => {
  const { datoCmsVaraTjanster } = useStaticQuery(
    graphql`
      query {
        datoCmsVaraTjanster {
          title
          contentSections {
            description
            title
          }
          serviceSectionTitle
          tjanster {
            namn
            bild {
              url
            }
          }
        }
      }
    `
  );
  return (
    <section>
      <h1
        sx={{
          textAlign: "center",
          marginTop: "32px",
          fontSize: "32px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
        }}
      >
        {datoCmsVaraTjanster.title}
      </h1>
      <div>
        {datoCmsVaraTjanster.contentSections.map((section) => (
          <div sx={{ maxWidth: "700px", marginX: "auto", marginTop: "46px" }}>
            <h4>{section.title}</h4>
            <p
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
              }}
            >
              {section.description}
            </p>
          </div>
        ))}
      </div>
      <h3
        sx={{
          marginTop: "46px",
          textAlign: "center",
          fontSize: "26px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "400",
        }}
      >
        {datoCmsVaraTjanster.serviceSectionTitle}
      </h3>
      <div sx={{ display: "flex", justifyContent: "center", paddingY: "24px" }}>
        {datoCmsVaraTjanster.tjanster.map((service) => (
          <div sx={{ margin: "18px" }}>
            <h4
              sx={{
                fontSize: "22px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              {service.namn}
            </h4>
            <img
              sx={{
                height: "350px",
                width: "250px",
                objectFit: "cover",
                marginY: "0",
                marginX: "auto",
                display: "block",
              }}
              src={service.bild.url}
              alt="Bathroom tiles"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
