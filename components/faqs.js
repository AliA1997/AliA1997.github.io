import React from 'react'

import PropTypes from 'prop-types'

const Faqs = (props) => {
  return (
    <>
      <div className="faqs-faqs">
        <h2 className="faqs-text Section-Heading">{props.heading}</h2>
        <div className="faqs-content-container">
          <div className="faqs-faq">
            <div className="faqs-question-container">
              <span className="faqs-question">{props.question}</span>
            </div>
            <div className="faqs-answer-container">
              <span className="faqs-answer">{props.answer}</span>
            </div>
          </div>
          <div className="faqs-faq1">
            <div className="faqs-question-container1">
              <span className="faqs-question1">{props.question1}</span>
            </div>
            <div className="faqs-answer-container1">
              <span className="faqs-answer1 Card-Text">{props.answer2}</span>
            </div>
          </div>
          <div className="faqs-faq2">
            <div className="faqs-question-container2">
              <span className="faqs-question2">{props.question21}</span>
            </div>
            <div className="faqs-answer-container2">
              <span className="faqs-answer2 Card-Text">{props.answer52}</span>
            </div>
          </div>
          <div className="faqs-faq3">
            <div className="faqs-question-container3">
              <span className="faqs-question3">{props.question211}</span>
            </div>
            <div className="faqs-answer-container3">
              <span className="faqs-answer3 Card-Text">{props.answer53}</span>
            </div>
          </div>
          <div className="faqs-faq4">
            <div className="faqs-question-container4">
              <span className="faqs-question4">{props.question4}</span>
            </div>
            <div className="faqs-answer-container4">
              <span className="faqs-answer4 Card-Text">{props.answer6}</span>
            </div>
          </div>
          <div className="faqs-faq5">
            <div className="faqs-question-container5">
              <span className="faqs-question5">{props.question5}</span>
            </div>
            <div className="faqs-answer-container5">
              <span className="faqs-answer5 Card-Text">{props.answer7}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faqs-faqs {
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
            justify-content: flex-start;
          }
          .faqs-text {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .faqs-content-container {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faqs-faq {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .faqs-question-container {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-question {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .faqs-answer-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-answer {
            font-size: 16px;
            font-style: normal;
            font-family: monospace;
            font-weight: 400;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-unit);
            letter-spacing: 1;
            text-transform: none;
            text-decoration: none;
          }
          .faqs-faq1 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .faqs-question-container1 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-question1 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .faqs-answer-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-answer1 {
            font-family: monospace;
            margin-bottom: var(--dl-space-space-unit);
          }
          .faqs-faq2 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .faqs-question-container2 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-question2 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .faqs-answer-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            padding-bottom: 32px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-answer2 {
            font-family: monospace;
            margin-bottom: var(--dl-space-space-unit);
          }
          .faqs-faq3 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .faqs-question-container3 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-question3 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .faqs-answer-container3 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            padding-bottom: 32px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-answer3 {
            font-family: monospace;
            margin-bottom: var(--dl-space-space-unit);
          }
          .faqs-faq4 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .faqs-question-container4 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-question4 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .faqs-answer-container4 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-answer4 {
            font-family: monospace;
            margin-bottom: var(--dl-space-space-unit);
          }
          .faqs-faq5 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .faqs-question-container5 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-question5 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .faqs-answer-container5 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .faqs-answer5 {
            font-family: monospace;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .faqs-content-container {
              width: 100%;
              flex-direction: column;
            }
            .faqs-faq {
              width: 100%;
            }
            .faqs-faq1 {
              width: 100%;
            }
            .faqs-faq2 {
              width: 100%;
            }
            .faqs-faq3 {
              width: 100%;
            }
            .faqs-faq4 {
              width: 100%;
            }
            .faqs-faq5 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .faqs-content-container {
              padding-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Faqs.defaultProps = {
  heading: 'Answers to your Questions',
  question: 'Can you describe your development process?',
  answer:
    'My development process typically involves requirements analysis, design, coding, testing, and deployment. I follow agile methodologies to ensure flexibility and collaboration throughout the project.',
  answer1:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  question1:
    'What is your preferred development stack for building web applications?',
  answer2:
    'My preferred development stack for web applications is React for the front end, .NET Core for the back end, TypeScript for type-safe coding, and SQL Server for data storage and retrieval. This stack offers a powerful and efficient foundation for web development.',
  answer3:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  question2:
    'What technologies do you specialize in as a full stack software engineer?',
  answer52:
    'I specialize in React for building dynamic user interfaces, .NET Core for server-side development, TypeScript for type-safe coding, and SQL Server for efficient database management. These technologies allow me to create robust and scalable web applications.',
  answer5:
    'What technologies do you specialize in as a full stack software engineer?',
  question21:
    'What technologies do you specialize in as a full stack software engineer?',
  question211: 'Are you available for freelance work or full-time employment?',
  answer53:
    'I am open to both freelance and full-time employment opportunities. Please get in touch via the "Contact" page, and we can discuss the details of your project or job offer.',
  question3: 'Can you describe your development process?',
  answer4:
    'My development process typically involves requirements analysis, design, coding, testing, and deployment. I follow agile methodologies to ensure flexibility and collaboration throughout the project.',
  question4: 'What is a full stack software engineer?',
  answer6:
    'A full stack software engineer is a professional with expertise in both front-end and back-end development. I specialize in using React for the front end and .NET with TypeScript for the back end, along with SQL Server for database management.',
  question41: 'What is a full stack software engineer?',
  answer61:
    'A full stack software engineer is a professional with expertise in both front-end and back-end development. I specialize in using React for the front end and .NET with TypeScript for the back end, along with SQL Server for database management.',
  question5:
    'Do you have experience with blockchain technologies, and if so, which ones?',
  answer7:
    "Yes, in addition to my expertise in React, .NET, TypeScript, and SQL Server, I also specialize in blockchain technologies, particularly Ethereum and Polygon (formerly Matic). I have experience in developing decentralized applications (dApps) and smart contracts on these platforms. Additionally, I'm proficient in Node.js, which is commonly used in blockchain development to create server-side applications and interact with blockchain networks.",
}

Faqs.propTypes = {
  heading: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  answer1: PropTypes.string,
  question1: PropTypes.string,
  answer2: PropTypes.string,
  answer3: PropTypes.string,
  question2: PropTypes.string,
  answer52: PropTypes.string,
  answer5: PropTypes.string,
  question21: PropTypes.string,
  question211: PropTypes.string,
  answer53: PropTypes.string,
  question3: PropTypes.string,
  answer4: PropTypes.string,
  question4: PropTypes.string,
  answer6: PropTypes.string,
  question41: PropTypes.string,
  answer61: PropTypes.string,
  question5: PropTypes.string,
  answer7: PropTypes.string,
}

export default Faqs
