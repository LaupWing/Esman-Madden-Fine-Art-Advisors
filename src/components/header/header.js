import React from "react"
import Nav from './nav/nav'
import Logo from './logo/logo'
import styles from "./header.module.css"

const Header = () => (
    <header
        className={styles.header}
    >
        <div className={`container ${styles.container}`}>
            <Logo/>
            <Nav/>
            
        </div>
    </header>
)

export default Header
