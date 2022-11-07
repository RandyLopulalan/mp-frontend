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

  {/*=== page state ===*/}
  const pageHander = (str) => {
    dispatch(getPage(str))
  }

  return (
    <div className='header'>
      aplicationName
      {pageState === 'detail' ? 
        <section className='header-menu'>
          <h4 onClick={() => pageHander('detail')}>
            <Link to={'/'}>
              <IoMdArrowRoundBack />
              Map 
            </Link>
          </h4>
          <h4 onClick={() => pageHander('cctv')}>
            <Link to={'/liveCamera'}>
              <TbDeviceComputerCamera />
              Live Camera
            </Link>
          </h4>
        </section>
        :
        <section className='header-menu'>
          <h4 onClick={() => pageHander('detail')}>
            <Link to={'/detail'}>
              <IoMdArrowRoundBack />
              Detail
            </Link>
          </h4>
          <h4>
            <Link to={'/'}>
              <BsMap />
              Map 
            </Link>
          </h4>
        </section>
      }
    </div>
  )
}