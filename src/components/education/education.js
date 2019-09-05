import React from 'react'
import styled from 'styled-components'
import { FaUniversity } from 'react-icons/fa'
import { FlagIcon } from 'react-flag-kit'
import SectionTitle from '../sectionTitle'
import siteConfig from '../../../data/siteConfig'

const Education = ({ className }) => {
  return (
    <div className={className}>
      <SectionTitle
        title="Education"
        name="education"
        icon={<FaUniversity size={28} />}
      />
      <div className="education__content">
        {siteConfig.education &&
          siteConfig.education.map((edu, idx) => (
            <React.Fragment key={`${edu.field}_${edu.degree}`}>
              <div className="education__edu">
                <div className="education__edu-header">
                  <span className="education__edu-school">{edu.school}</span>
                  <span className="education__edu-date">
                    {edu.startYear} - {edu.endYear || 'Present'}
                  </span>
                </div>
                <span className="education__edu-studies">
                  {edu.degree}, {edu.field}
                </span>
              </div>
              {idx < siteConfig.education.length - 1 && <hr />}
            </React.Fragment>
          ))}
        {siteConfig.languages && (
          <React.Fragment>
            <h3>Languages</h3>
            <ul>
              {siteConfig.languages.map(({ code, language, level }) => (
                <li key={`${code}-${language}`}>
                  <div className="education__lang">
                    {code && (
                      <FlagIcon
                        className="education__lang__flag"
                        code={code}
                        size={18}
                      />
                    )}
                    <div
                      className={code ? '' : 'education__lang__text--noflag'}
                    >
                      <strong>{language}:</strong> {level}.
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default styled(Education)`
  position: relative;
  .education__content {
    margin-bottom: 40px;
  }
  .education__edu {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .education__edu-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .education__edu-school {
    font-weight: bold;
  }
  .education__edu-date {
    color: #bbb;
    font-size: 10px;
  }
  .education__edu-studies {
    font-size: 16px;
    font-style: italic;
  }
  .education__lang {
    display: flex;
    align-items: center;
  }
  .education__lang__flag {
    margin: 0;
    margin-right: 6px;
  }
  .education__lang__text--noflag {
    margin-left: 24px;
  }
`
