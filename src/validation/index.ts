/** */

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
    const isValidImage = /^https?:\/\/.*\.(png|jpg|jpeg|gif|bmp|webp|svg)$/i.test(product.imageurl);
  if (!product.title.trim() || product.title.length <10 || product.title.length >80  ) {
    errors.title ='product title must have a charctar between 10 and 80 characters'
  }

  if (!product.desc.trim() || product.desc.length <10 || product.desc.length >800  ) {
    errors.desc ='product Description must have a charctar between 10 and 80 characters'
  }
  if (!product.imageurl.trim() || !isValidImage) {
    errors.imageurl ='product image url must be a valid image url'
  } 
  if (!product.price.trim() || !isNaN(Number(product.price)) ) {
    errors.price ='Vaild price number is required'
  }


    return errors
}