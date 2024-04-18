import FeaturedRoom from '@/Components/FeaturedRoom/FeaturedRoom'
import Gallery from '@/Components/Gallery/Gallery'
import HeroSection from '@/Components/HeroSection/HeroSection'
import NewsLetter from '@/Components/NewsLetter/NewsLetter'
import PageSearch from '@/Components/PageSearch/PageSearch'
import { getFeaturedRoom } from '@/libs/apis'
import React from 'react'

const page = async() => {
  const featuredRoom=await getFeaturedRoom();
  // console.log(featuredRoom);
  return (
    <>
      <HeroSection/>
      <PageSearch/>
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery/>
     <NewsLetter/>
    </>
  )
}

export default page

