/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const Services = () => {
  const { datoCmsVaraTjanster } = useStaticQuery(
    graphql`
      query {
        datoCmsVaraTjanster {
          title
          serviceImage {
            alt
            url
          }
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
      <div
        sx={{
          marginTop: "45px",
          display: "flex",
          flexDirection: ["column", "column", "row"],
        }}
      >
        <div
          sx={{
            width: ["100%", "100%", "45%"],
            padding: ["8px", "8px", "0px"],
          }}
        >
          <img
            src={datoCmsVaraTjanster.serviceImage.url}
            alt={datoCmsVaraTjanster.serviceImage.alt}
            sx={{
              width: "100%",
              maxHeight: ["75vh", "70vh", "unset"],
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          {datoCmsVaraTjanster.contentSections.map((section) => (
            <div
              key={section.title}
              sx={{
                maxWidth: "700px",
                marginX: "auto",
                padding: ["8px 16px", "12px 32px"],
              }}
            >
              <Styled.h3>{section.title}</Styled.h3>
              <Styled.p>{section.description}</Styled.p>
            </div>
          ))}
        </div>
      </div>
      <Styled.h1>{datoCmsVaraTjanster.serviceSectionTitle}</Styled.h1>
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
          <div key={service.namn} sx={{ margin: "12px" }}>
            <Styled.h3
              sx={{
                textAlign: "center",
                padding: ["8px", "0px"],
              }}
            >
              {service.namn}
            </Styled.h3>
            <img
              sx={{
                height: "350px",
                width: ["300px", "250px"],
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
