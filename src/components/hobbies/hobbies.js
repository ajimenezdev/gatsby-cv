import React from 'react'
import styled from 'styled-components'
import { FaCoffee } from 'react-icons/fa'
import SectionTitle from '../sectionTitle'
import siteConfig from '../../../data/siteConfig'

const Hobbies = ({ className }) => {
  return (
    <div className={className}>
      <SectionTitle
        title="Hobbies"
        name="hobbies"
        icon={<FaCoffee size={28} />}
      />
      <div className="hobbies__content">
        {siteConfig.hobbies &&
          siteConfig.hobbies.map(hobby => {
            const icon = require('react-icons/fa')[hobby.icon]
            return (
              <div className="hobbies_item" key={hobby.name}>
                {React.createElement(icon, { size: 32 })}
                <span>{hobby.name}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default styled(Hobbies)`
  .hobbies__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .hobbies_item {
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px;
    text-align: center;
    box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
`
