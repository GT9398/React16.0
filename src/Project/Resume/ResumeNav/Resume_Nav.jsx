// import './Resume_Nav.css'
import './Style.scss'

const Resume_Nav = () => {
  return (
    <div className='navbar-wrapper'>
        <nav className='navbar'>
            <div className="navbar-div"><i class="fa-brands fa-jedi-order"></i></div>
            <div className="navbar-div">Home</div>
            <div className="navbar-div">About</div>
            <div className="navbar-div">Skills</div>
            <div className="navbar-div">Contact</div>
            <div className="navbar-div"><input placeholder='Search '></input></div>
        </nav>
    </div>
  )
}

export default Resume_Nav