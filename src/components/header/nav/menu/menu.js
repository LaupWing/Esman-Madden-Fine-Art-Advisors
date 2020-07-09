import React from 'react'
import { Link } from "gatsby"
import styles from './menu.module.css'

export default function menu() {
    return (
        <ul className={styles.menu}>
            <li><Link activeClassName={styles.active} to="/">Home</Link></li>
            <li><Link activeClassName={styles.active} to="/about">About</Link></li>
            <li><Link activeClassName={styles.active} to="/artworks">Artworks</Link></li>
            <li><Link activeClassName={styles.active} to="/contact">Contact</Link></li>
        </ul>
    )
}
