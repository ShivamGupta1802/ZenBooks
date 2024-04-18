// CoverImage type
const CoverImage = {
  url: ""
};

// Image type
const Image = {
  _key: "",
  url: ""
};

// Amenity type
const Amenity = {
  _key: "",
  amenity: "",
  icon: ""
};

// Slug type
const Slug = {
  _type: "",
  current: ""
};

// Room type
const Room = {
  _id: "",
  coverImage: CoverImage,
  description: "",
  dimension: "",
  discount: 0,
  images: [Image], // Use array literal instead of Array.of()
  isBooked: false,
  isFeatured: false,
  name: "",
  numberOfBeds: 0,
  offeredAmenities: [Amenity], // Use array literal instead of Array.of()
  price: 0,
  slug: Slug,
  specialNote: "",
  type: ""
};

// CreateBookingDto type
const CreateBookingDto = {
  user: "",
  hotelRoom: "",
  checkinDate: "",
  checkoutDate: "",
  numberOfDays: 0,
  adults: 0,
  children: 0,
  totalPrice: 0,
  discount: 0
};
