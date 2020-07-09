import React from "react"
import Nav from './nav/nav'
import Logo from './logo/logo'
import styles from "./header.module.css"
import Image from '../image2'

const Header = () => (
    <header
        className={styles.header}
    >
        <div className={`container ${styles.container}`}>
            <Logo/>
            <Nav/>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            {/* <Image /> */}
                <Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />
            </div>
        </div>
    </header>
)

export default Header
