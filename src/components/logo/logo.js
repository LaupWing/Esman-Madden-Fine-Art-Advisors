import React, {useRef, useEffect} from 'react'
import styles from './logo.module.css'

export default () => {
    const container = useRef(null)

    useEffect(()=>{
        const spans = container.current.querySelectorAll('span')
        const maxVal = Math.max(...Array.from(spans).map(x=>Number(x.offsetWidth)))
        spans.forEach(span=>{
            if((maxVal-span.offsetWidth)>0){
                span.style.letterSpacing = ((maxVal-span.offsetWidth) / (span.textContent.length-2) )+ 'px'
            }
        })
    })
    return (
        <h1 
            className={styles.logo}
            ref={container}
        >
                <span>e.Madden</span>
                <span>Fine_Art</span>
                <span>Advisors</span>
        </h1>
    )
}
