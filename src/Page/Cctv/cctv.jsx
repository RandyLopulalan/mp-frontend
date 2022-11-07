import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { Footer, Header } from '../../Component'
import { VscDebugDisconnect } from "react-icons/vsc";
import './cctv.css'

export const Cctv = () => {
  const [connect, setConnect] = useState(navigator.onLine)

  const connection = useCallback(() => {
    return connect ? (
      <section className='cctv-view'>
            <video className='cctv-item' controls muted src="" >
              Your browser does not support HTML video.
            </video>
            <video className='cctv-item' controls muted src="" >
              Your browser does not support HTML video.
            </video>
            <video className='cctv-item' controls muted src="" >
              Your browser does not support HTML video.
            </video>
            <video className='cctv-item' controls muted src="" >
              Your browser does not support HTML video.
            </video>
          </section>
    ) : (
      <div className='txt'>
        <VscDebugDisconnect />
        <h1>No Internet Connection</h1>
      </div>
    )
  },[connect])

  useEffect(() => {
    const interval = setInterval(() => {
      setConnect(prev => prev = '1');
      setConnect(prev => prev = navigator.onLine);
    }, 50000);
    return () => clearInterval(interval);
  }, []);

  console.log(connect);
  return (
    <div className='cctv'>
      <Header />
        <div className='cctv-container'>
          <h3>Cctv / Live Camera</h3>
          {connection()}
        </div>
      <Footer />
    </div>
  )
}