import React from "react"
import Nav from './nav/nav'
import Logo from './logo/logo'
import styles from "./header.module.css"
import Image from '../image2';

const Header = () => (
    <header
        className={styles.header}
    >
        <div className={`container ${styles.container}`}>
            <Logo/>
            <Nav/>
            <Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />
        </div>
    </header>
)

export default Header
