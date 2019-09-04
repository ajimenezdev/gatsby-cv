import React, { useState } from 'react'
import styled from 'styled-components'
import { FaHome, FaBars } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
import siteConfig from '../../../data/siteConfig'
const { headerLinks } = siteConfig

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303b;
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #25303b;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const HeaderLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
  cursor: pointer;
  @media (max-width: 900px) {
    padding: 14px;
  }
`

const Header = ({ className }) => {
  const [toggled, setToggled] = useState(false)
  return (
    <HeaderWrapper className={className}>
      <HeaderNav className="header">
        <FaHome
          size={32}
          className="header__homeIcon"
          onClick={() => scroll.scrollToTop()}
        />
        <HeaderLinkGroup
          className={`header__LinkGroup ${
            toggled ? 'header__LinkGroup-toggled' : ''
          }`}
        >
          {headerLinks.map((headerLink, i) => (
            <HeaderLink
              smooth={true}
              to={headerLink.url}
              offset={-70}
              key={`header-link-${i}`}
              onClick={() => setToggled(false)}
            >
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderLinkGroup>
        <div className="header__smallScreen">
          <FaBars
            size={32}
            className="header__smallScreen__menuIcon"
            onClick={() => setToggled(!toggled)}
          />
        </div>
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default styled(Header)`
  .header {
    display: flex;
    /* align-items: center; */
  }
  .header__smallScreen {
    display: none;
  }
  .header__homeIcon {
    color: white;
    cursor: pointer;
    margin: 16px;
  }
  @media (max-width: 900px) {
    .header {
      height: auto;
    }
    .header__LinkGroup {
      display: none;
    }
    .header__LinkGroup-toggled {
      display: flex;
      flex-direction: column;
      margin-top: 56px;
      flex: 1;
    }
    .header__smallScreen {
      display: flex;
      justify-content: flex-end;
      margin: 16px;
    }
    .header__smallScreen__menuIcon {
      color: white;
      cursor: pointer;
    }
  }
`
