import React from 'react'

import PropTypes from 'prop-types'

const ProfessionalExperience = (props) => {
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
      <div className="professional-experience-professional-experience">
        <div className="professional-experience-heading-container">
          <h1 className="professional-experience-text Section-Heading">
            {props.heading}
          </h1>
        </div>
        <div className="professional-experience-content-container">
          <div className="professional-experience-about-1">
            <div className="professional-experience-container">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text01">
                {props.text}
              </span>
            </div>
            <div className="professional-experience-container1">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon02"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text02">
                {props.text31}
              </span>
            </div>
            <div className="professional-experience-container2">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon04"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text03">
                {props.text1}
              </span>
            </div>
            <div className="professional-experience-container3">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon06"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text04">
                {props.text2}
              </span>
            </div>
          </div>
          <div className="professional-experience-about-11">
            <div className="professional-experience-container4">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon08"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text05">
                <span>Implement easy-to-use interfaces for users.</span>
                <br className="Card-Text"></br>
                <span className="Card-Text">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="professional-experience-container5">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon10"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text09">
                Adhered to SOLID principles, followed clean code practices, and
                implemented test-driven development standards.
              </span>
            </div>
            <div className="professional-experience-container6">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon12"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text10">
                {props.text3}
              </span>
            </div>
            <div className="professional-experience-container7">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon14"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text11">
                {props.text4}
              </span>
            </div>
          </div>
          <div className="professional-experience-about-12">
            <div className="professional-experience-container8">
              <svg
                viewBox="0 0 1024 1024"
                className="professional-experience-icon16"
              >
                <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
              </svg>
              <span className="professional-experience-text12">
                {props.text41}
              </span>
            </div>
          </div>
        </div>
        <button onClick={handleDownload} className="professional-experience-button Anchor button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .professional-experience-professional-experience {
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
          .professional-experience-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .professional-experience-text {
            width: max-content;
            align-self: center;
          }
          .professional-experience-content-container {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-about-1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .professional-experience-container {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text01 {
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-family: monospace;
            font-weight: 400;
            line-height: 1.55;
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
          }
          .professional-experience-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon02 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text02 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-container2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon04 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text03 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-container3 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon06 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text04 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-about-11 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .professional-experience-container4 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon08 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text05 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-container5 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon10 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text09 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-container6 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon12 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text10 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-container7 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon14 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text11 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-about-12 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .professional-experience-container8 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .professional-experience-icon16 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .professional-experience-text12 {
            text-align: left;
            font-family: monospace;
          }
          .professional-experience-button {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 767px) {
            .professional-experience-heading-container {
              width: 100%;
            }
            .professional-experience-text {
              text-align: center;
            }
            .professional-experience-content-container {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
            .professional-experience-about-1 {
              width: 65%;
            }
            .professional-experience-about-11 {
              width: 65%;
            }
            .professional-experience-about-12 {
              width: 65%;
            }
          }
          @media (max-width: 479px) {
            .professional-experience-about-1 {
              width: 100%;
            }
            .professional-experience-about-11 {
              width: 100%;
            }
            .professional-experience-about-12 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ProfessionalExperience.defaultProps = {
  button: 'DOWNLOAD MY RESUME',
  heading: 'Professional Experience',
  text: 'Integrating AI into web applications',
  text1: 'Implementing specialized OAuth APIs for niche fintech applications.',
  text2: "Integration of OpenAI api's.",
  text3:
    'Refactored complex code to make it understandable for other developers.',
  text4:
    'Extensive experience with microservices on both the backend and frontend.',
  text31:
    'Utilizing cutting-edge technologies such as Next.js to enhance the user experience.',
  text41:
    'Delivered a re-write of legacy systems for a client using React with Redux/Sagas in the front end. The back-end architecture was made up of C# .NET Core microservices communicating internally with gRPC and protocol buffers.',
}

ProfessionalExperience.propTypes = {
  button: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text31: PropTypes.string,
  text41: PropTypes.string,
}

export default ProfessionalExperience
