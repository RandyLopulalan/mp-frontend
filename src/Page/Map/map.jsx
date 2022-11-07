import React, { useCallback } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { dataPerusahaan } from '../../Component/dataInit';
import { getPage } from '../../features/common/commonSlice';
import { getData } from '../../features/data/dataSlice';
import './map.css'

export const Map = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const defaultPosition = [-7.9797, 112.6304]

  const toDetail = useCallback((list) => {
    navigate("/detail")
    dispatch(getPage('detail'))
    dispatch(getData(list))
  },[navigate, dispatch])

  const DataMapping = useCallback(() =>{
    return (dataPerusahaan.map(data => {
      return(
        <div className='map-detail' key={data.id} onClick={() => toDetail(data)}>
          <Marker position={[data.lat, data.lng]}>
            <Popup>
              <section className='popup map-detail'>
                <img height="100" width="150" alt='foto-puskesmas' src={data.img1}/>
                <h5>{data.nama}</h5>
                <span>Click Here to See Detail</span>
              </section>
            </Popup>
          </Marker>
        </div>
      )
    }))
  },[toDetail])

  return (
    <div className='map'>
      <MapContainer center={defaultPosition} zoom={11} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <DataMapping />
      </MapContainer>
    </div>
  )
}