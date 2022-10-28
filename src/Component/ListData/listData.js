import React from 'react'
import { Link } from 'react-router-dom'
import './listData.css'

export const ListData = () => {
  return (
    <div className='listData'>
        <section>
            <h3>Title</h3>
            <img height="150" width="150" alt='no' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'/>
        </section>
        <article>
            <h5>info</h5>
            <p>descripton</p>
            <button className='btn'><Link to={'/detail'}>More Detail</Link></button>
        </article>

    </div>
  )
}