import { useState } from 'react'

const Nav = () => {
  const [toggleStatus, setToggleStatus] = useState(false)

  const handleToggle = () => {
    setToggleStatus(!toggleStatus)
  }

  return (
    <nav>
      <div className="container">
        <strong>&lt; André Lebioda &frasl;&gt;</strong>
        <ul className={`${toggleStatus ? 'show' : ''}`}>
          <li>
            <a href="#home" onClick={() => handleToggle()}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleToggle()}>
              Über mich
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleToggle()}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleToggle()}>
              Projekte
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleToggle()}>
              Kontakt
            </a>
          </li>
        </ul>
        <div className={`layer ${toggleStatus ? 'show' : ''}`}></div>
        <button
          className={`toggle ${toggleStatus ? 'close' : 'open'}`}
          onClick={() => handleToggle()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Nav
