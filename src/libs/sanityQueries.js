import { groq } from "next-sanity";

export const getFeaturedRoomquery = groq`*[_type=="hotelRoom"&& isFeatured==true][0]{
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage
}`;


export const getRoomsQuery = groq`*[_type=="hotelRoom"]{
    _id,
    description,
    discount,
    images,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    coverImage,
    dimensions,
    type

}`;

export const getRoom = groq`*[_type=="hotelRoom" && slug.current==$slug][0]{
    _id,
    description,
    coverImage,
    discount,
    images,
    isBooked,
    isFeatured,
    name,
    price,
    slug,
    dimensions,
    type,
    numberofBeds,
    offeredAmmenities,
    specialNote


}`;

