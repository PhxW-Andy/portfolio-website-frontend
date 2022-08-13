// import framer motion
import { motion } from 'framer-motion'

// import fontawesome
import { FaFileDownload } from 'react-icons/fa'

// import utils
import { imageUrlBuilder } from '../utils/imageUrlBuilder'

// framer motion definitions

const durationTime = 0.8

const h1 = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: durationTime },
  },
}

const p = {
  hidden: { x: -70, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: durationTime },
  },
}

const button = {
  hidden: { x: -90, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: durationTime },
  },
}

const Header = ({ header }) => {
  const { data } = header

  return (
    <header id="home">
      {data.map((item, index) => (
        <div key={index} className="container">
          <div className="content">
            <motion.h1 initial="hidden" animate="visible" variants={h1}>
              {item.attributes.headline}
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={p}>
              {item.attributes.description}
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={button}
              className="btn-wrapper"
            >
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
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: durationTime,
              delay: 0.2,
            }}
            className="image"
          >
            <img
              src={imageUrlBuilder(item.attributes.image.data.attributes.url)}
              // alt={data.attributes.image.data.attributes.alternativeText}
            />
          </motion.div>
        </div>
      ))}
    </header>
  )
}

export default Header
