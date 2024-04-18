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
