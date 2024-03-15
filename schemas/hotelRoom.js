import { defineField } from "sanity";

const roomTypes = [
  { title: "Basic", value: "basic" },
  { title: "Delux", value: "delux" },
  { title: "Luxury", value: "uxury" },
  { title: "Suit", value: "suit" },
];

const hotelRoom = {
  name: "hotelroom",
  title: "Hotel Room",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum 50 chareacter"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum 50 chareacter"),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("Minimum 100 chareacter"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(100).error("Minimum 100 chareacter"),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "URL" },
            { name: "file", type: "file", title: "File" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(3).error("Minimum of 3 required"),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "File" },
      ],
      validation: (Rule) => Rule.required().error("Cover Image is required"),
    }),
    defineField({
      name: "type",
      title: "Room Type",
      type: "string",
      options: {
        list: roomTypes,
      },
      validation: (Rule) => Rule.required(),
      initialValue: "basic",
    }),
    defineField({
      name: "specialNote",
      title: "Special Note",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Check-in Time is 12:00 PM, Check-out time is 11:59 AM. If you leave behind any item, please contact the receptionist.",
    }),
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
    }),
    defineField({
      name: "numberofBeds",
      title: "Number of Beds",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
      initialValue: 1,
    }),
    defineField({
      name: "offeredAmenities",
      title: "Offered Amenities",
      type: "array",
      of: [
        { type: "object",
         fields: [
            { name: "icon",title:'Icon',type:'string'},
            { name: "amenity",title:'Amenity',type:'string'},
        ]
        }
    ],
    }),
    defineField({
      name: "isBooked",
      title: "Is Booked",
      type: "boolean",
      initialValue:false,
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      initialValue:false,
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of:[
        {type:'review'}
      ]
    }),
  ],
};

export default hotelRoom;
