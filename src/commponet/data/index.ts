import { Iproduct, Ipnput  , Icatagory} from "../../interfaces/interface";
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
      imgUrl: "https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg",
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
      imgUrl: "https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg",
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
      imgUrl: "https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg",
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
      imgUrl: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      id: "desc", // Ensure this matches 'desc' in Iproduct
      label: "Description",
      name: "desc",
      type: "text",
    },
    {
      id: "imageurl", // Match the property name
      label: "Image URL",
      name: "imageurl",
      type: "text",
    },
    {
      id: "price",
      label: "Price",
      name: "price",
      type: "text",
    },
  ];

export const categorys : Icatagory[] = [{
  id : uuid () ,
  name : "cars",
  imgUrl : "https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Car-Wallpapers-Free-Download.jpg"
} , 
   {
    id : uuid () ,
    name : "Pc",
    imgUrl : "https://tse4.mm.bing.net/th?id=OIP.r_qnyOWgY9iJejjrfOp5pwHaF7&pid=Api&P=0&h=220" , 
   } , 
   {
    id : uuid () ,
    name : 'Shirt', 
    imgUrl : "https://tse3.mm.bing.net/th?id=OIP.Mq-LsRtsmAlrNIc_pxnL7wHaIh&pid=Api&P=0&h=220"

   }
]
  
  export const colors: string[] = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A1", // Pink
    "#A133FF", // Purple
    "#FFD700", // Gold
    "#00FFFF", // Cyan
    "#FF4500", // Orange Red
    "#008080", // Teal
    "#800000", // Maroon
    "#4B0082", // Indigo
    "#FFFF00", // Yellow
    "#000000", // Black
    "#FFFFFF", // White
    "#808080", // Gray
    "#B22222", // Firebrick
    "#2E8B57", // Sea Green
    "#D2691E", // Chocolate
    "#FF1493", // Deep Pink
    "#4682B4"  // Steel Blue
  ];
  
  