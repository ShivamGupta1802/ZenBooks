'use client'


import React, { useState } from 'react'
import Search from '../Search/Search'

const PageSearch = () => {



    const [roomTypeFilter, setRoomTypeFilter] = useState('') 
    const [searchQuery, setSearchQuery] = useState('')
       
  return (
    <Search  searchQuery={searchQuery}  setSearchQuery={setSearchQuery} roomTypeFilter={roomTypeFilter} setRoomTypeFilter={setRoomTypeFilter}/>
  )
}

export default PageSearch