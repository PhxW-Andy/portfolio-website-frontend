import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div>Page not found</div>
      <Link to="/"> Zurück zu Startseite</Link>
    </>
  )
}

export default NotFound
