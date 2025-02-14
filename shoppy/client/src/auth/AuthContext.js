import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        try {
            const token = localStorage.getItem("token");
            return token ? true : false;
        } catch (error) {
            console.error('로컬스토리지 데이터 작업 도중 에러 발생 : ', error);
            return false;
        }
    });
    // 비동기로 처리한 후 결과 출력

    // 토큰이 있으면 로그인 상태 유지
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    return (
        <AuthContext.Provider value = {{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}