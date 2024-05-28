import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const cartContext = createContext()

export function useCart (){
  return useContext(cartContext);
}

const CartContext = ({children}) => {
  return (
    
    
    <CartContext.Provider>
      { children }
    </CartContext.Provider>

    
  )
}

export default CartContext
