import React from 'react'
import styles from './footer.module.css'
import Logo from '../logo/logo'

export default ()=>(
    <footer className={styles.footer}>
        <div className={styles.info_container}>
            <div className={styles.field}>
                <Logo/>
                <div className={styles.address}>
                    <p>Javastraat 114B</p>
                    <p>2585 AV Den Haag</p>
                    <p>Netherlands</p>
                </div>
                <div className={styles.address}>
                    <p>115 East 86th Street</p>
                    <p>New York, NY 10028</p>
                    <p>USA</p>
                </div>
            </div>
            <div className={styles.field}>
                <div className={styles.contact}>
                    <p>Phone NL</p>
                    <p>+31 651 293448</p>
                    <p>+31 654213699</p>
                </div>
                <div className={styles.contact}>
                    <p>Phone US:</p>
                    <p>+1 212 7221970</p>
                </div>
                <div className={styles.contact}>
                    <p>Email:</p>
                    <p>info@esmanmadden.com</p>
                    <p>abigail1@compuserve.com</p>
                    <p>pmadden@xs4all.nl</p>
                </div>
            </div>
        </div>
    </footer>
)