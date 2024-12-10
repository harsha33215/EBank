import './index.css'
import Cookies from 'js-cookie'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <div className="home-container">
      <div className="heading-container">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />
        <button type="button" className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>

      <div className="card-container">
        <h1 className="main-heading">Your Flexibility, Our Excellence</h1>
        <img
          className="digital-card"
          alt="digital card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </div>
    </div>
  )
}

export default Home
