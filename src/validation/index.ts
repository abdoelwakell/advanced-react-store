/**
 * /**
 * Validates the product object to ensure all required properties meet specific criteria.
 * 
 * @param {IProp} product - The product object to validate containing title, description, image URL, and price.
 * @returns {IProp} errors - An object containing error messages for invalid fields. Each field contains a string error message or an empty string if valid.
 * 
 * @typedef {Object} IProp
 * @property {string} title - The title of the product (must be between 10 and 80 characters).
 * @property {string} desc - The description of the product (must be between 10 and 800 characters).
 * @property {string} imageurl - The URL of the product image (must be a valid image URL).
 * @property {string} price - The price of the product (must be a valid number).
 * 
 */
interface IProp {
    title: string ;
    desc : string ;
    imageurl : string;
    price : string  ;
}


export const productvalidation = ( product : IProp)=> {
    const errors : IProp = {
    title: '',
    desc : '' ,
    imageurl : '' ,
    price : ''
    }
    {/** Define an regular experrsion for IMg-Url  */}
    const isValidImage = /^https?:\/\/.*\.(png|jpg|jpeg|gif|bmp|webp|svg)(\?.*)?$/i.test(product.imageurl);

  if (!product.title.trim() || product.title.length <10 || product.title.length >80  ) {
    errors.title ='product title must have a charctar between 10 and 80 characters'
  }

  if (!product.desc.trim() || product.desc.length <10 || product.desc.length >800  ) {
    errors.desc ='product Description must have a charctar between 10 and 80 characters'
  }
  if (!product.imageurl.trim() || !isValidImage) {
    errors.imageurl ='product image url must be a valid image url'
  } 
  if (!product.price.trim() || isNaN(Number(product.price)) ) {
    errors.price ='Vaild price number is required'
  }


    return errors
}
