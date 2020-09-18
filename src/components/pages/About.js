import React from 'react'

function About() {
    return (
        <div style={styling}>
            <h1>About Page</h1>
            <p>This is ToDo list app v1.0.0</p>
        </div>
    )
}

const styling = {
    textAlign: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '10px'
}

export default About;
