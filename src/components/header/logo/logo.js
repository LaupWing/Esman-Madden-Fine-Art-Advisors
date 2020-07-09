import React from 'react'
import { Link } from "gatsby"
import styles from './logo.module.css'

export default function logo() {
    return (
        <h1 className={styles.logo}>
            <Link to="/">
                <span>esman Madden</span>
                <span>Fine Art</span>
                <span>Advisors</span>
            </Link>
        </h1>
    )
}
