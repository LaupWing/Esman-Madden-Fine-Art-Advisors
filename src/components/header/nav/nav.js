import React from 'react'
import { Link } from "gatsby"
import styles from './nav.module.css'

export default function menu() {
    return (
        <ul className={styles.nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    )
}
