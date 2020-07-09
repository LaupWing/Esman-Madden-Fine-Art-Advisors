import React, {useRef, useEffect} from 'react'
import { Link } from "gatsby"
import styles from './logo.module.css'

export default () => {
    const container = useRef(null)

    useEffect(()=>{
        const spans = container.current.querySelectorAll('span')
        const maxVal = Math.max(...Array.from(spans).map(x=>Number(x.offsetWidth)))
        spans.forEach(span=>{
            if((maxVal-span.offsetWidth)>0){
                span.style.letterSpacing = ((maxVal-span.offsetWidth) / (span.textContent.length-2) )+ 'px'
                // console.log(maxVal-span.offsetWidth)
            }
        })
    })
    return (
        <Link to="/">
            <h1 
                className={styles.logo}
                ref={container}
            >
                    <span>e.Madden</span>
                    <span>Fine_Art</span>
                    <span>Advisors</span>
            </h1>
        </Link>
    )
}
