// import fontawesome
import { FaFileDownload } from 'react-icons/fa'

// import utils
import { imageUrlBuilder } from '../utils/imageUrlBuilder'

const Header = ({ header }) => {
  const { data } = header

  return (
    <header id="home">
      {data.map((item, index) => (
        <div key={index} className="container">
          <div className="content">
            <h1>{item.attributes.headline}</h1>
            <p>{item.attributes.description}</p>
            <div className="btn-wrapper">
              {item.attributes.button.map((btn, index) => (
                <a
                  key={index}
                  className={`btn ${btn.download ? 'download' : ''}`}
                  href={btn.link}
                  target={btn.download ? '_blank' : ''}
                >
                  <span className="circle">
                    <span className="arrow"></span>
                  </span>
                  {btn.title}
                  {btn.download && <FaFileDownload className="down-icon" />}
                </a>
              ))}
            </div>
          </div>
          <div className="image">
            <img
              src={imageUrlBuilder(item.attributes.image.data.attributes.url)}
              // alt={data.attributes.image.data.attributes.alternativeText}
            />
          </div>
        </div>
      ))}
    </header>
  )
}

export default Header
