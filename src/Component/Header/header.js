import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { BsMap } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPage } from '../../features/common/commonSlice';

import './header.css'

export const Header = () => {
  const dispatch = useDispatch()
  const { pageState } = useSelector((state) => state.common);

  const pageHander = (str) => {
    dispatch(getPage(str))
  }

  const nav = () => {
    if(pageState === ''){
      return(
        <section className='header-menu'>
          <h4 onClick={() => pageHander('')}>
            <Link to={'/'}>
              <BsMap />
              Map 
            </Link>
          </h4>
        </section>
      )
    }else if(pageState === 'detail'){
      return(
        <section className='header-menu'>
          <h4 onClick={() => pageHander('')}>
            <Link to={'/'}>
              <IoMdArrowRoundBack />
              Map 
            </Link>
          </h4>
          <h4 onClick={() => pageHander('liveCamera')}>
            <Link to={'/liveCamera'}>
              <TbDeviceComputerCamera />
              Live Camera 
            </Link>
          </h4>
        </section>
      )
    }else{
      return(
        <section className='header-menu'>
          <h4 onClick={() => pageHander('detail')}>
            <Link to={'/detail'}>
              <IoMdArrowRoundBack />
              Detail 
            </Link>
          </h4>
          <h4 onClick={() => pageHander('')}>
            <Link to={'/liveCamera'}>
              <BsMap />
              Map
            </Link>
          </h4>
        </section>
      )
    }
  }

  return (
    <div className='header'>
      aplicationName
      {nav()}
    </div>
  )
}