import React from "react"
import Nav from './nav/nav'
import styles from "./header.module.css"
import Image from '../image2'

const Header = () => (
    <header
        className={styles.header}
    >
        <Nav/>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image alt="Gatsby in Space" filename="test_painting.jpg"/>
        </div>
    </header>
)

export default Header
