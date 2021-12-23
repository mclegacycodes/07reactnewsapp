import React from 'react'

const HeroNewsBottom = ({urlToImage,title}) => {
    return (
        <div>
          <img src={urlToImage} alt="news image" /> 
          <h3>{title}</h3> 
        </div>
    )
}

export default HeroNewsBottom
