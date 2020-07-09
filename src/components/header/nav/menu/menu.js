import React from 'react'
import { Link } from "gatsby"
import styles from './menu.module.css'

export default function menu() {
    return (
        <ul className={styles.menu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    )
}
