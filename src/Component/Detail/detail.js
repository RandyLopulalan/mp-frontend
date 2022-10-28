import React from 'react'
import { Map } from '../index'
import './detail.css'

export const Detail = () => {
  const defaultPosition = [-6.176, 106.8228]
  return (
    <div className='detail'>
        <section className='detail-info'>
            Detail info
        </section>
        <Map defaultPosition={defaultPosition}/>
    </div>
  )
}