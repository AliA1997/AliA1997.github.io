import React from 'react'

import PropTypes from 'prop-types'

const NavbarContainer = (props) => {
  const handleDownload = () => {
    const filename = 'Resume.pdf'; // Replace with the name of your file
    const filePath = `/${filename}`; // Replace with the actual path to your file in the public directory

    // Create a hidden anchor element
    const anchor = document.createElement('a');
    anchor.href = filePath;
    anchor.download = filename;

    // Trigger a click event to initiate the download
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up the anchor element
    document.body.removeChild(anchor);
  };

  return (
    <>
      <div data-role="Header" className="navbar-container-navbar-container">
        <div className="navbar-container-navbar">
          <span className="Card-Heading navbar-container-heading">
            {props.Heading}
          </span>
          <div className="navbar-container-links-container">
            <span className="navbar-container-link1 Navbar-Link">
              {props.link1}
            </span>
            <span className="navbar-container-link2 Navbar-Link">
              {props.link2}
            </span>
            <span className="navbar-container-link2 Navbar-Link">{props.link3}</span>
            <span style={{ cursor: 'pointer' }} onClick={handleDownload} className="Navbar-Link">{props.link4}</span>
          </div>
          <div data-role="BurgerMenu" className="navbar-container-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-container-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="navbar-container-mobile-menu">
            <div className="navbar-container-container">
              <span className="Card-Heading navbar-container-heading1">
                {props.Heading1}
              </span>
              <div
                data-role="CloseMobileMenu"
                className="navbar-container-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navbar-container-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="navbar-container-links-container1">
              <span className="navbar-container-link4 Navbar-Link">
                {props.link4}
              </span>
              <span className="navbar-container-link5 Navbar-Link">
                {props.link5}
              </span>
              <span className="navbar-container-link6 Navbar-Link">
                {props.link6}
              </span>
              <span className="Navbar-Link">{props.link7}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-container-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar-container-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .navbar-container-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .navbar-container-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .navbar-container-link1 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .navbar-container-link2 {
            margin-right: var(--dl-space-space-tripleunit);
          }
          .navbar-container-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container-icon {
            width: 36px;
            height: 36px;
          }
          .navbar-container-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-tripleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-container-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-container-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container-icon2 {
            width: 24px;
            height: 24px;
          }
          .navbar-container-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container-link4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-container-link5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navbar-container-link6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .navbar-container-heading {
              text-align: center;
            }
            .navbar-container-heading1 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .navbar-container-navbar {
              position: relative;
            }
            .navbar-container-links-container {
              display: none;
            }
            .navbar-container-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .navbar-container-icon {
              fill: var(--dl-color-gray-white);
            }
          }
          @media (max-width: 479px) {
            .navbar-container-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

NavbarContainer.defaultProps = {
  Heading: 'Ali Alhaddad',
  link: 'About',
  link1: 'Experience',
  link2: 'Portofolio',
  link3: 'Contact',
  Heading1: 'Logo',
  link4: 'Resume',
  link5: 'Experience',
  link6: 'Portofolio',
  link7: 'Contact',
}

NavbarContainer.propTypes = {
  Heading: PropTypes.string,
  link: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  Heading1: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  link6: PropTypes.string,
  link7: PropTypes.string,
}

export default NavbarContainer
