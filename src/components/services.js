/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const Services = () => {
  const { datoCmsVaraTjanster } = useStaticQuery(
    graphql`
      query {
        datoCmsVaraTjanster {
          title
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
  console.log(datoCmsVaraTjanster.tjanster);
  return (
    <section>
      <h2 sx={{ textAlign: "center", marginY: "24px" }}>
        {datoCmsVaraTjanster.title}
      </h2>
      <div>
        <div
          sx={{ display: "flex", justifyContent: "center", paddingY: "24px" }}
        >
          {datoCmsVaraTjanster.tjanster.map((service) => (
            <div sx={{ margin: "18px" }}>
              <h4>{service.namn}</h4>
              <img
                sx={{
                  height: "150px",
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
      </div>
    </section>
  );
};

export default Services;
