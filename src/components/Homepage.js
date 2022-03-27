import React from 'react'
import Form from './Form/Form'
import Navbar from './Navbar/Navbar'

function Homepage() {
    return (
        <div style={{backgroundColor:'black',paddingBottom:'20vh'}}>
            <Navbar/>
            <Form/>
        </div>
    )
}

export default Homepage
