import React from 'react'

const HeroNews = ({type,title,author}) => {
    return (
        <div>
            <h3>{type}</h3>
            <h1>{title}</h1>
            <p> <span>{author}</span></p>
        </div>
    )
}

export default HeroNews
