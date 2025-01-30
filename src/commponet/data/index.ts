import { Iproduct, Ipnput } from "../../interfaces/interface";
import { v4 as uuid } from "uuid";

export const productsList: Iproduct[] = [
  {
    id: uuid(),
    title: "Tesla",
    desc: "Cars are among the most significant inventions of the modern era, transforming the way people travel and connect. They offer convenience, freedom, and efficiency, making it possible to traverse vast distances with ease. Cars come in a variety of types and designs, from compact sedans to luxurious SUVs and powerful sports cars. Advances in technology have greatly improved their performance, fuel efficiency, and safety. Features like airbags, adaptive cruise control, and lane-keeping assist have made driving safer than ever before. In recent years, electric vehicles (EVs) have emerged as a key innovation.",
    imageurl: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "50000",
    colors: ["", "", ""],
    category: {
      name: "cars",
      imageurl: "https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Tesla",
    desc: "Cars are among the most significant inventions of the modern era, transforming the way people travel and connect...",
    imageurl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "50000",
    colors: ["", "", ""],
    category: {
      name: "cars",
      imageurl: "https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Tesla",
    desc: "Cars are among the most significant inventions of the modern era, transforming the way people travel and connect...",
    imageurl: "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "50000",
    colors: ["", "", ""],
    category: {
      name: "cars",
      imageurl: "https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Tesla",
    desc: "Cars are among the most significant inventions of the modern era, transforming the way people travel and connect...",
    imageurl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "50000",
    colors: ["", "", ""],
    category: {
      name: "cars",
      imageurl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
];

export const formInputList: Ipnput[] = [
  {
    id: "title",
    label: "Title",
    name: "title",
    type: "text",
  },
  {
    id: "description",
    label: "Description",
    name: "desc",
    type: "text",
  },
  {
    id: "image",
    label: "Image URL",
    name: "product image URL",
    type: "text",
  },
  {
    id: "price",
    label: "Price",
    name: "price",
    type: "text",
  },
];
