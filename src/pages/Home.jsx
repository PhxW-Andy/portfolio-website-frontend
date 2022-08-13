import { useQuery, gql } from '@apollo/client'

// import components
import Nav from '../components/Nav'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
  const { loading, error, data } = useQuery(QueryAll)

  if (error) return <p>Error...</p>

  return (
    <>
      {!loading && (
        <>
          <Nav />
          <Header header={data.headers} />
          <AboutMe about={data.aboutMes} skills={data.skills} />
          <Projects projects={data.projects} />
          <Footer />
        </>
      )}
    </>
  )
}
export default Home

const QueryAll = gql`
  query {
    headers {
      data {
        id
        attributes {
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
`
