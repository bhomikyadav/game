import React from 'react'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'

function Section() {
    return (
        <div style={{display:'flex'}}>
            <Section1 />
            <Section2 />
        </div>
    )
}

export default Section
