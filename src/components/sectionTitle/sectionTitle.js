import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({ className, title, name, icon }) => {
  return (
    <div className={className} name={name}>
      {icon}
      <h1 className="header__title">{title}</h1>
    </div>
  )
}

export default styled(SectionTitle)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;

  .header__title {
    margin-bottom: 0;
    margin-left: 10px;
  }
`
