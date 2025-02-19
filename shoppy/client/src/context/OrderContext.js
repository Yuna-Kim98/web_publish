import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    // 전역 공간에서 자동 업데이트 되도록 관리
    const [ orderList, setOrderList ] = useState([]);
    const [ orderPrice, setOrderPrice] = useState(0);
    const [ member, setMember ] = useState({});

    return (
        <OrderContext.Provider value={{ orderList, setOrderList,
                                        orderPrice, setOrderPrice,
                                        member, setMember
                                    }}>
            {children}
        </OrderContext.Provider>
    );
}