import React from 'react'
import { Footer, Header } from '../../Component'
import './cctv.css'

export const Cctv = () => {
  return (
    <div className='cctv'>
      <Header />
        <div className='cctv-container'>
          <h3>Cctv / live camera</h3>
          <section className='cctv-view'>
            camera view
          </section>
        </div>
      <Footer />
    </div>
  )
}