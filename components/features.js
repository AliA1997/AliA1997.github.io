import React from 'react'

import PropTypes from 'prop-types'

const Features = (props) => {
  return (
    <>
      <div id="personal-projects" className="features-features">
        <div className="features-heading-container">
          <h2 className="features-text Section-Heading">{props.heading}</h2>
          <span className="features-text1">{props.text}</span>
        </div>
        <div className="features-cards-container">
          <div className="features-card">
            <div className="features-icon-container">
              <a
                href="https://metafire.financial"
                target="_blank"
                rel="noreferrer noopener"
                className="features-link"
              >
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="features-image"
                />
              </a>
            </div>
            <div className="features-content-container">
              <span className="features-heading Card-Heading">
                {props.heading1}
              </span>
              <span className="features-text2">{props.text1}</span>
            </div>
          </div>
          <div className="features-card1">
            <div className="features-icon-container1">
              <a
                href="https://crypto-shops.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="features-link1"
              >
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="features-image1"
                />
              </a>
            </div>
            <div className="features-content-container1">
              <span className="features-heading1 Card-Heading">
                {props.heading2}
              </span>
              <span className="features-text3">{props.text2}</span>
            </div>
          </div>
          <div className="features-card2">
            <div className="features-icon-container2">
              <a
                href="https://resultio.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="features-link2"
              >
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="features-image2"
                />
              </a>
            </div>
            <div className="features-content-container2">
              <span className="features-heading2 Card-Heading">
                {props.heading3}
              </span>
              <span className="features-text4">{props.text3}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features-features {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .features-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .features-text {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .features-text1 {
            font-size: 18px;
            text-align: center;
            font-family: monospace;
          }
          .features-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .features-card {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .features-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .features-link {
            display: contents;
          }
          .features-image {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .features-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .features-text2 {
            text-align: center;
            font-family: monospace;
          }
          .features-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .features-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .features-link1 {
            display: contents;
          }
          .features-image1 {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .features-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .features-text3 {
            text-align: center;
            font-family: monospace;
          }
          .features-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .features-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .features-link2 {
            display: contents;
          }
          .features-image2 {
            width: 200px;
            object-fit: cover;
            text-decoration: none;
          }
          .features-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .features-text4 {
            text-align: center;
            font-family: monospace;
          }
          @media (max-width: 991px) {
            .features-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .features-heading-container {
              width: 100%;
            }
            .features-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .features-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .features-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .features-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 479px) {
            .features-card {
              width: 100%;
            }
            .features-card1 {
              width: 100%;
            }
            .features-card2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  heading: 'My Personal Projects',
  text: 'Some of my personal projects\n',
  image_src: '/metafire%20financial%20lp%20png-200w.png',
  image_alt: 'image',
  heading1: 'Metafire Financial LP',
  text1: 'Landing pages for a nft financing startup.',
  image_src1: '/crypto vapes gif.gif',
  image_alt1: 'image',
  heading2: 'CryptoVapes',
  text2:
    'An example company project that uses Coinbase commerce to accept crypto transactions',
  image_src2: '/resultio gif.gif',
  image_alt2: 'image',
  heading3: 'Result.IO',
  text3:
    'An example company project that uses Openai API to convert code between programming languages.',
}

Features.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  heading3: PropTypes.string,
  text3: PropTypes.string,
}

export default Features
