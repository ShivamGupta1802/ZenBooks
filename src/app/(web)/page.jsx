import Gallery from '@/Components/Gallery/Gallery'
import HeroSection from '@/Components/HeroSection/HeroSection'
import NewsLetter from '@/Components/NewsLetter/NewsLetter'
import PageSearch from '@/Components/PageSearch/PageSearch'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection/>
      <PageSearch/>
      {/* Featured Room */}
      <Gallery/>
     <NewsLetter/>
    </>
  )
}

export default page

