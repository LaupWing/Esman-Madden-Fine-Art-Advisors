import React from "react"
import Nav from './nav/nav'
import styles from "./header.module.css"
import Background from './background/background' 

const Header = () => (
    <header
        className={styles.header}
    >
        <Nav/>
        <Background/>
    </header>
)

export default Header
