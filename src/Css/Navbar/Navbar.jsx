import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <nav className="navbar-nav">
            <div className="navbar-div">Home</div>
            <div className="navbar-div">About</div>
            <div className="navbar-div">Gallery</div>
            <div className="navbar-div">Contact</div>
            <div className="navbar-div"><input placeholder='search'></input></div>
            <div className="navbar-div">Cart</div>
        </nav>
    </div>
  )
}

export default Navbar