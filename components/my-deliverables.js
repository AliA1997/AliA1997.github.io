import React from 'react'

import PropTypes from 'prop-types'

const MyDeliverables = (props) => {
  return (
    <>
      <div className="my-deliverables-my-deliverables">
        <div className="my-deliverables-heading-container">
          <h2 className="my-deliverables-text Section-Heading">
            {props.heading}
          </h2>
          <span className="my-deliverables-text1">{props.text}</span>
        </div>
        <div className="my-deliverables-cards-container">
          <div className="my-deliverables-card">
            <div className="my-deliverables-icon-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="my-deliverables-image"
              />
            </div>
            <div className="my-deliverables-content-container">
              <span className="my-deliverables-heading Card-Heading">
                {props.heading1}
              </span>
              <span className="my-deliverables-text2">{props.text1}</span>
            </div>
          </div>
          <div className="my-deliverables-card1">
            <div className="my-deliverables-icon-container1">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="my-deliverables-image1"
              />
            </div>
            <div className="my-deliverables-content-container1">
              <span className="my-deliverables-heading1 Card-Heading">
                {props.heading2}
              </span>
              <span className="my-deliverables-text3">{props.text2}</span>
            </div>
          </div>
          <div className="my-deliverables-card2">
            <div className="my-deliverables-icon-container2">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="my-deliverables-image2"
              />
            </div>
            <div className="my-deliverables-content-container2">
              <span className="my-deliverables-heading2 Card-Heading">
                {props.heading3}
              </span>
              <span className="my-deliverables-text4">{props.text3}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .my-deliverables-my-deliverables {
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
          .my-deliverables-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .my-deliverables-text {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .my-deliverables-text1 {
            font-size: 18px;
            text-align: center;
            font-family: monospace;
            font-weight: 600;
            line-height: 1.55;
            letter-spacing: 2;
            text-transform: none;
            text-decoration: none;
          }
          .my-deliverables-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .my-deliverables-card {
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
          .my-deliverables-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .my-deliverables-image {
            width: 200px;
            height: 12rem;
            object-fit: cover;
          }
          .my-deliverables-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .my-deliverables-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .my-deliverables-text2 {
            text-align: center;
            font-family: monospace;
          }
          .my-deliverables-card1 {
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
          .my-deliverables-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .my-deliverables-image1 {
            width: 200px;
            height: 12rem;
            object-fit: cover;
          }
          .my-deliverables-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .my-deliverables-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .my-deliverables-text3 {
            text-align: center;
            font-family: monospace;
          }
          .my-deliverables-card2 {
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
          .my-deliverables-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .my-deliverables-image2 {
            width: 200px;
            height: 12rem;
            object-fit: cover;
          }
          .my-deliverables-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .my-deliverables-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .my-deliverables-text4 {
            text-align: center;
            font-family: monospace;
          }
          @media (max-width: 991px) {
            .my-deliverables-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .my-deliverables-heading-container {
              width: 100%;
            }
            .my-deliverables-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .my-deliverables-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .my-deliverables-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .my-deliverables-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 479px) {
            .my-deliverables-card {
              width: 100%;
            }
            .my-deliverables-card1 {
              width: 100%;
            }
            .my-deliverables-card2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

MyDeliverables.defaultProps = {
  heading: 'My Deliverables',
  text: 'What I Deliver',
  image_src: '/282599-1500h.webp',
  image_alt: 'image',
  heading1: 'Seamless UX',
  text1:
    'User-friendly interfaces using React ensure that your applications are visually appealing and provide a smooth and engaging experience for your users.',
  image_src1: '/unnamed-1500h.png',
  image_alt1: 'image',
  heading2: 'Reliable Backend Solutions',
  text2:
    'Leveraging the power of .NET Core, I develop reliable and scalable backend systems that drive your applications. These solutions are built to handle high volumes of data and traffic, ensuring reliability and performance.',
  image_src2: '/41sh-svwpxl-1500h.jpg',
  image_alt2: 'image',
  heading3: 'Problem Solving',
  text3:
    'With my extensive experience, I bring a problem-solving mindset to the table. I can quickly identify and resolve technical challenges, optimizing your applications for efficiency and minimizing downtime.',
}

MyDeliverables.propTypes = {
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

export default MyDeliverables
