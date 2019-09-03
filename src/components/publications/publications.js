import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'

const Publications = ({ className }) => {
  return (
    <div className={className}>
      <h1>Publications</h1>
      <div className="publications__content">
        {siteConfig.publications &&
          siteConfig.publications.map((pub, idx) => (
            <React.Fragment key={pub.title}>
              <publication className="publications_pub">
                <div className="publications_pub-header">
                  <span className="publications__pub-title">{pub.title}</span>
                  <span className="publications__pub-date">
                    {pub.date.month} {pub.date.year}
                  </span>
                </div>
                <span className="publications__pub-company">
                  {pub.company_medium}
                </span>
                <span className="publications__pub-description">
                  {pub.description}
                </span>
                <a
                  href={pub.link}
                  target="_blank"
                  className="publications__pub-link"
                >
                  {pub.link}
                </a>
              </publication>
              {idx < siteConfig.publications.length - 1 && <hr />}
            </React.Fragment>
          ))}
      </div>
    </div>
  )
}

export default styled(Publications)`
  position: relative;
  .publications__content {
    margin-bottom: 40px;
  }
  .publications_pub {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .publications_pub-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .publications__pub-title {
    font-weight: bold;
  }
  .publications__pub-date {
    color: #bbb;
    font-size: 10px;
  }
  .publications__pub-company {
    font-size: 16px;
    font-style: italic;
  }
  .publications__pub-description {
    color: #656565;
    font-size: 14px;
  }
  .publications__pub-link {
    margin-top: 10px;
    font-size: 14px;
  }
`
