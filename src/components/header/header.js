import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav/nav'
import Logo from './logo/logo'
import styles from "./header.module.css"


const Header = ({ siteTitle }) => (
    <header
        className={styles.header}
    >
        <Logo/>
        <Nav/>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
