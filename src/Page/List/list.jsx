import React from 'react'
import { ListData } from '../../Component'
import './list.css'

export const List = () => {
  return (
    <div className='list'>
      <h3>List</h3>
      <section className='list-list'>
        <ListData />
        <ListData />
        <ListData />
        <ListData />
        <ListData />
        <ListData />
        <ListData />
      </section>
    </div>
  )
}