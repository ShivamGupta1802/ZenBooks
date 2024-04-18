
import Image from "next/image";
import React from "react"
import Link from  "next/link"

const FeaturedRoom = (props) => {
  return (
    <section className="flex md:flex-row flex-col px-4 py-10 items-centre gap-12 container mx-auto">
      <div className="md:grid gap-8 grid-cols-1 ">
        <div className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0">
          <Image
            src={props.featuredRoom.coverImage.url}
            alt={props.featuredRoom.name}
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 h-48">
          {props.featuredRoom.images.splice(1,2).map(image=>(
            <div key={image._key} className="Rounded-2xl overflow-hidden">
              <Image
              src={image.url}
              alt={image._key}
              width={300}
              height={300}
              className="img scale-animation"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className='md:py-10 md:w-1/2 text-left'>
        <h3 className='font-heading mb-12'>{props.featuredRoom.name}</h3>

        <p className='font-normal max-w-md'>{props.featuredRoom.description}</p>

        <div className='flex flex-col md:flex-row md:items-end justify-between mt-5'>
          <div className='flex mb-3 md:mb-0'>
            <div className='flex gap-3 flex-col items-center justify-center mr-4'>
              <p className='text-xs lg:text-xl text-center'>Start From</p>
              <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                $ {props.featuredRoom.price}
              </p>
            </div>
            <div className='flex gap-3 flex-col items-center justify-center mr-4'>
              <p className='text-xs lg:text-xl text-center'>Discount</p>
              <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                $ {props.featuredRoom.discount}
              </p>
            </div>
          </div>

          <Link
            href={`/rooms/${props.featuredRoom.slug.current}`}
            className='border h-fit text-center border-tertiary-dark text-tertiary-dark px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl'
          >
            More Details
          </Link>
        </div>
      </div>

    </section>
  );
};

export default FeaturedRoom;
