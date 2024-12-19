import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// react router dom에서 제공되는 컴포넌트
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import CgvLogin from "../form/CgvLoginForm.jsx"
import SingUp from "../form/SignUp.jsx"
import About from './About.jsx';
import Support from './Support.jsx';
import AppBestSeller from "../yes24/AppBestSeller.jsx"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<CgvLogin />} />
                    <Route path="/signup" element={<SingUp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/bestseller" element={<AppBestSeller />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}

// Layout 컴포넌트 : 틀을 만들어주는 컴포넌트
// path의 이름은 하나만 사용할 수 있고 컴포넌트와 이름이 동일하지 않아도 된다.