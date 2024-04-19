import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RoomCard = (props) => {
  return (
    <div className='rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black'>
      <div className='h-60 overflow-hidden'>
        <Image
          src={props.room.coverImage.url}
          alt={props.room.name}
          width={250}
          height={250}
          className='img scale-animation'
        />
      </div>

      <div className='p-4 bg-white'>
        <div className='flex justify-between text-xl font-semibold'>
          <p>{props.room.name}</p>
          <p>₹ {props.room.price}</p>
        </div>

        <p className='pt-2 text-xs'>{props.room.type} Room</p>

        <p className='pt-3 pb-6'>{props.room.description.slice(0, 100)}...</p>

        <Link
          href={`/rooms/${props.room.slug.current}`}
          className='bg-primary inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500'
        >
          {props.room.isBooked ? 'BOOKED' : 'BOOK NOW'}
        </Link>
      </div>
    </div>
  )
}

export default RoomCard