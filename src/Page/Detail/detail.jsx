import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Footer, Header } from '../../Component/index';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
import './detail.css'
import "swiper/css";
import "swiper/css/navigation";
import { useCallback } from 'react';

export const Detail = () => {
  const { data } = useSelector((state) => state.data);

  const mappingDetail = useCallback(()=>{
      return(
        <section className='detail-table'>
          <table>
            <thead>
              <tr>
                <th>header</th>
                <th>header</th>
                <th>header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>row</td>
                <td>row</td>
                <td>row</td>
              </tr>
              <tr>
                <td>row</td>
                <td>row</td>
                <td>row</td>
              </tr>
            </tbody>
          </table>
        </section>
      )
  },[])


  return (
    <div className='detail'>
        <Header data={data}/>
        <div className='detail-header'>
          <h3>{data.nama}</h3>
          <div className='detail-container'>

            {/*=== image slide ===*/}
            <section className='detail-map'>
              <section className='detail-img-slide'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  {data.img1 !== "" && <SwiperSlide><img height="250" width="460" alt='puskes' src={data.img1}/></SwiperSlide>}
                  {data.img2 !== "" && <SwiperSlide><img height="250" width="460" alt='puskes' src={data.img2}/></SwiperSlide>}
                  {data.img3 !== "" && <SwiperSlide><img height="250" width="460" alt='puskes' src={data.img3}/></SwiperSlide>}
                </Swiper>
              </section>
              
              {/*=== mini map ===*/}
              <MapContainer center={[data.lat, data.lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[data.lat, data.lng]}>
                  <Popup >
                    {data.nama}
                  </Popup>
                </Marker>
              </MapContainer>
            </section>

            {/*=== address & telp ===*/}
            <article className='detail-address'>
              <p>Alamat: {data.alamat}</p>
              <p>Phone: {data.telp}</p>
              <h4>Kepala Puskesmas: {data.kepala}</h4>
            </article>

            {/*=== more info ===*/}
            <article className='detail-info-lainnya'>
              info lainnya
              <p>list nama dokter</p>
              <p>fasilitas dan harga</p>
              {mappingDetail()}
              <p className='btn-back'><Link to={"/map"}>Back</Link></p>
            </article>
          </div>
        </div>
        <Footer />
    </div>
  )
}