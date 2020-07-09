import React from "react"
import Menu from './menu/menu'
import Logo from './logo/logo'
import styles from "./nav.module.css"

const Header = () => (
    <div className={styles.container}>
        <nav className={`container ${styles.nav}`}>
            <Logo/>
            <Menu/>
        </nav>
    </div>
)

export default Header
