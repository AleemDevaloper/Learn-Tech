
import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import logo from "../assets/images/logo1.png";
import "../assets/JS/index.js"
import { NavLink } from "react-router-dom";
function Header() {
    return (
      <>
       <section className="top-area">
       {/* Header section  */}
      <header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-transparent bg-body-dark">
          <div className="container-xl w-100">
            <a className="navbar-brand fs-4 " href="#">
               <img src={logo}  alt=""/>Learn Tech</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <div id="navicon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div className="sidebar offcanvas offcanvas-start" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header sub-main-color">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="" />Learn Tech</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                   <NavLink className="nav-link" to='/web'>Web Courses</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/app'> App</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/mobile-app'> Mobile App</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link" to='/about'>About</NavLink>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </nav>
 
          
      
      </header>
      </section>
      
      </>
    );
  }

export default Header;
