import React from "react"
import Nav from './nav/nav'
import Logo from './logo/logo'
import styles from "./header.module.css"


const Header = () => (
    <header
        className={styles.header}
    >
        <Logo/>
        <Nav/>
    </header>
)

export default Header
