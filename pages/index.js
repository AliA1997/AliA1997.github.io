import React from 'react'
import Head from 'next/head'

import NavbarContainer from '../components/navbar-container'
import MyDeliverables from '../components/my-deliverables'
import ProfessionalExperience from '../components/professional-experience'
import Clients from '../components/clients'
import Features from '../components/features'
import Faqs from '../components/faqs'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Ali Alhaddad</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="og:locale" content="en_US"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content="Ali Alhaddad"></meta>
          <meta property="og:url" content="https://alia1997.github.io/"></meta>
          <meta property="og:site_name" content="Ali Alhaddad Portfolio Site"></meta>
          <link rel="icon" href="/logo.png"></link>
        </Head>
        <NavbarContainer></NavbarContainer>
        <div className="blue-blur"></div>
        <div className="purple-blur"></div>
        <div className="home-section-separator"></div>
        <div className="home-section-separator1"></div>
        <div className="home-container1">
          <div className="home-hero">
            <div className="home-hero-text-container">
              <h1 className="home-heading">
                I help startups deliver the right message to their customers
              </h1>
              <span className="home-text">
                Full-Stack engineer with half a decade of professional
                experience. Helping startups whether in fintech or consulting
                achieve their goals.
              </span>
              <div className="home-cta-btn-container">
                <button className="home-cta-btn Anchor button">
                  <span className="home-text1">MY WORK</span>
                </button>
              </div>
            </div>
            <div className="home-container2">
              <img
                alt="image"
                src="/294110648_583703156686035_8891978694223805628_n_auto_x2-1500w.jpg"
                className="home-image"
                style={{ zIndex: 1}}
              />
            </div>
          </div>
        </div>
        <MyDeliverables></MyDeliverables>
        <div className="home-about">
          <ProfessionalExperience></ProfessionalExperience>
        </div>
        <div className="home-section-separator2"></div>
        <Clients></Clients>
        <Features></Features>
        <div className="home-section-separator3"></div>
        <div className="home-section-separator4"></div>
        <Faqs></Faqs>
        <div className="home-section-separator5"></div>
        <div className="home-subscribe">
          <div className="home-container3">
            <img
              src="/2kj97con6c7z2tds0d%20(1)-600w.gif"
              alt="image"
              className="home-image1"
            />
          </div>
          <div className="home-container4">
            <div className="home-heading-container">
              <h1 className="home-text2 Section-Heading">Contact Me</h1>
              <span className="Section-Text home-text3">
                Contact me regarding full-time and collaboration opportunities.
              </span>
            </div>
            <input
              type="text"
              required="true"
              placeholder="E-mail"
              className="home-textinput Section-Text input"
            />
            <a
              href="mailto:devmtnali@gmail.com?subject=Portfolio Website Contact US JOB STUFF"
              className="home-link Anchor button"
            >
              SEND
            </a>
          </div>
        </div>
        <div className="home-section-separator6"></div>
        <div className="home-footer-container">
          <Footer></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #f1f1f1;
          }
          .home-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(4, 4, 4);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-family: monospace;
            font-weight: 600;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-fiveunits);
            letter-spacing: 2;
            text-transform: none;
            text-decoration: none;
          }
          .home-cta-btn-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #c9c9c9;
          }
          .home-text1 {
            color: #101010;
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-black);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-white);
          }
          .home-container2 {
            width: 40%;
            height: 439px;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('/default-img.svg');
            background-position: center;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-subscribe {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container3 {
            width: 50%;
            height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-image1 {
            width: 514px;
            height: 426px;
            object-fit: cover;
          }
          .home-container4 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-heading-container {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text2 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-textinput {
            width: 50%;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-link {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-section-separator6 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          @media (max-width: 991px) {
            .home-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading {
              text-align: center;
            }
            .home-container2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-cta-btn {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-cta-btn1 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-subscribe {
              flex-direction: column;
            }
            .home-container3 {
              width: 70%;
            }
            .home-container4 {
              width: 100%;
              align-items: center;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-text2 {
              text-align: center;
            }
            .home-text3 {
              text-align: center;
            }
            .home-textinput {
              width: 100%;
            }
            .home-link {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .home-hero-text-container {
              width: 100%;
            }
            .home-container3 {
              width: 100%;
            }
            .home-container4 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-link {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
