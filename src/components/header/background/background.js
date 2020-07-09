import React from 'react'
import styles from './background.module.css'
import Image from '../../image2'

export default ()=>{
    return (
        <div className={styles.background}>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image alt="Gatsby in Space" filename="test_painting.jpg"/>
            </div>
        </div>
    )
}