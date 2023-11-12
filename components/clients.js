import React from 'react'

import PropTypes from 'prop-types'

const Clients = (props) => {
  return (
    <>
      <div className="clients-clients">
        <div className="clients-heading-container">
          <h1 className="clients-text Section-Heading">{props.heading}</h1>
          <span className="clients-text1">{props.text}</span>
        </div>
        <div className="clients-logo-container">
          <a
            href="https://ensurem.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="clients-link"
          >
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="clients-image"
            />
          </a>
          <a
            href="https://kikoda.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="clients-link1"
          >
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="clients-image1"
            />
          </a>
          <div className="clients-logo">
            <a
              href="https://metafire.financial/"
              target="_blank"
              rel="noreferrer noopener"
              className="clients-link2"
            >
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="clients-image2"
              />
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .clients-clients {
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
          .clients-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .clients-text {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .clients-text1 {
            font-size: 18px;
            text-align: center;
            font-family: monospace;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2;
            text-transform: none;
            text-decoration: none;
          }
          .clients-logo-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .clients-link {
            display: contents;
          }
          .clients-image {
            width: 200px;
            align-self: center;
            object-fit: cover;
            text-decoration: none;
          }
          .clients-link1 {
            display: contents;
          }
          .clients-image1 {
            width: 200px;
            align-self: center;
            object-fit: cover;
            text-decoration: none;
          }
          .clients-logo {
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .clients-link2 {
            display: contents;
          }
          .clients-image2 {
            width: 125px;
            object-fit: cover;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .clients-heading-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .clients-text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Clients.defaultProps = {
  heading: 'Clients',
  text: 'Companies I provided my services for',
  image_src: '/ensuremlogo.svg',
  image_alt: 'image',
  image_src1: '/logo_white_bg.svg',
  image_alt1: 'image',
  image_src2: '/1662822240830-200h.jpeg',
  image_alt2: 'image',
}

Clients.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default Clients
