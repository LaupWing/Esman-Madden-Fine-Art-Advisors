import React from 'react'
import styles from './background.module.css'
import Image from '../../image2'

export default ()=>{
    return (
        <div className={styles.background}>
            <div className={styles.img_container}>
                <div style={{ width: '100%'}}>
                    <Image alt="Gatsby in Space" filename="test_painting.jpg"/>
                </div>
            </div>
            <div className={styles.img_container}>
                <div style={{ width: '100%'}}>
                    <Image alt="Gatsby in Space" filename="test_painting.jpg"/>
                </div>
            </div>
        </div>
    )
}