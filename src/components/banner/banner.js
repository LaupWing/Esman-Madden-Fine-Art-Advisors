import React from 'react'
import styles from './banner.module.css'
import Image from '../image2'

export default ()=>{
    return (
        <section className={styles.banner}>
            <div className={styles.background}>
                <div className={styles.img_container}>
                    <div style={{ width: '100%', maxWidth: '900px'}}>
                        <Image alt="Gatsby in Space" filename="test_painting.jpg"/>
                    </div>
                </div>
                <div className={styles.img_container}>
                    <div style={{ width: '100%', maxWidth: '500px'}}>
                        <Image alt="Gatsby in Space" filename="test_painting.jpg"/>
                    </div>
                </div>
            </div>
            <article className={styles.info}>
                <h2>Andy Warhol: From A to Z</h2>
                <p>28-10-2020</p>
            </article>
        </section>
    )
}