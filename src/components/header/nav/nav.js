import React from "react"
import Menu from './menu/menu'
import Logo from './logo/logo'
import styles from "./nav.module.css"

const Nav = () => (
    <nav className={`container ${styles.nav}`}>
        <Logo/>
        <Menu/>
    </nav>
)

export default Nav
