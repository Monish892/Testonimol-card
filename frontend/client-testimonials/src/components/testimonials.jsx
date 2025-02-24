import React from 'react'

function Testimonialcard({name,review}){
    return(
        <div style={{border:'1px solid black',padding:'20px',margin:'10px',borderRadius:'8px',width:'200px'}}>
            <h3>{name}</h3>
            <p>{review}</p>
        </div>
    )
}


export default Testimonialcard;