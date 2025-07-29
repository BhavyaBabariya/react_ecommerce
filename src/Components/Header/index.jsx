import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import Logo from "../../assets/images/theme-logo-dark.png";
import SearchBox from "../SearchBox";
import Navigation from "./Navigations";
import { useContext } from "react";
import { MyContext } from "../../App";
import CountryDropdown from "../CountryDropdown";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <div className="headerWrapper">
      {/* Top Notification Strip */}
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0">
            Due to <b>Heavy Rain</b>, orders may be processed with a slight delay.
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="header py-2">
        <div className="container">
          <div className="row align-items-center">

            {/* Logo */}
            <div className="col-sm-2 d-flex align-items-center">
              <Link to="/">
                <img src={Logo} alt="Logo" className="img-fluid" />
              </Link>
            </div>

            {/* Country Dropdown */}
            <div className="col-sm-9 d-flex align-items-cener part2">
            {
              context.countryList !==0 && <CountryDropdown />
            }
            

            {/* Search Box */}
            <div className="col-sm-7">
              <SearchBox />
            </div>

            </div>
            

            {/* User & Cart */}
            <div className="col-sm-1 d-flex align-items-center justify-content-end part3">
              <Button className="circle mr-3">
                <FiUser />
              </Button>
              <div className="cartTab d-flex align-items-center">
                <span className="price">$3.29</span>
                <div className="position-relative ml-2">
                  <Button className="circle">
                    <SlHandbag />
                  </Button>
                  <span className="count d-flex align-items-center justify-content-center">
                    1
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default Header;
