import { product } from "@/types/products";


export const addToCart = (product : product) => {
  const cart : product[] = JSON.parse(localStorage.getItem('cart') || '[]')

  const existingProductIndex = cart.findIndex(item => item._id === product._id)

  if(existingProductIndex > -1){
    cart[existingProductIndex].inventory += 1
  }
  else{
    cart.push({
      ...product, inventory:1
    })
  }
  localStorage.setItem('cart', JSON.stringify(cart))
} 


export const removeFormCart = (productID : string ) =>{
  let cart : product[] = JSON.parse(localStorage.getItem('cart') || '[]')

  cart = cart.filter(item => item._id !==productID)
  localStorage.setItem('cart', JSON.stringify(cart))
}


export const undateCartQuantity = (productID : string, quantity : number) =>{
  const cart : product[] = JSON.parse(localStorage.getItem('cart') || '[]')

  const productIndex = cart.findIndex(item => item._id ===productID)

  if (productIndex > -1){
    cart [productIndex].inventory = quantity;
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

export const getCartItems = () : product[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}