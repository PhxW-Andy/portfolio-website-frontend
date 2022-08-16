import { useQuery, gql } from "@apollo/client";

// import components
import Nav from "../components/Nav";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const { loading, error, data } = useQuery(QueryAll);

  if (error) return <p>error</p>;

  return (
    <>
      <Nav />
      {!loading && (
        <>
          <Header header={data.headers} />
          <AboutMe about={data.aboutMes} skills={data.skills} />
          <Projects projects={data.projects} />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};
export default Home;

const QueryAll = gql`
  query {
    headers {
      data {
        id
        attributes {
          title
          headline
          description
          button {
            id
            title
            link
            download
          }
          image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
    aboutMes {
      data {
        id
        attributes {
          portrait {
            data {
              attributes {
                name
                url
              }
            }
          }
          description
        }
      }
    }
    skills {
      data {
        id
        attributes {
          title
          skills {
            name
          }
        }
      }
    }
    projects {
      data {
        id
        attributes {
          project_image {
            data {
              attributes {
                name
                url
              }
            }
          }
          title
          description
          technologies_used {
            name
          }
          buttons {
            title
            link
          }
        }
      }
    }
  }
`;
