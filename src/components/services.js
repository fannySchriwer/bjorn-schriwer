/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
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
      <Styled.h1>{datoCmsVaraTjanster.title}</Styled.h1>
      <div>
        {datoCmsVaraTjanster.contentSections.map((section) => (
          <div
            sx={{
              maxWidth: "850px",
              marginX: "auto",
              marginTop: ["30px", "60px"],
              paddingX: [2, 3],
            }}
          >
            <Styled.h3>{section.title}</Styled.h3>
            <Styled.p>{section.description}</Styled.p>
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
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "center",
          flexWrap: "wrap",
          paddingY: "24px",
        }}
      >
        {datoCmsVaraTjanster.tjanster.map((service) => (
          <div sx={{ margin: "12px" }}>
            <Styled.h3
              sx={{
                textAlign: "center",
              }}
            >
              {service.namn}
            </Styled.h3>
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
