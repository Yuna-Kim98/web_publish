import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    // 전역 공간에서 자동 업데이트 되도록 관리
    const [cartList, setCartList] = useState([]); 
    const [cartCount, setCartCount] = useState(0);

    return (
        <CartContext.Provider value={{cartList, setCartList, cartCount, setCartCount}}>
            {children}
        </CartContext.Provider>
    );
}