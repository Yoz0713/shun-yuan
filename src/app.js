import './scss/all.scss';
import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import Home from './component/index';
import LifeFunction from './component/lifefunction';
import Team from './component/team';
import Layout from './component/layout';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import MoveBack from './component/config/moveBack';
import Urban from './component/urban';
import Calculate from './component/calculator';
import Product from './component/product';
import News from './component/news';
import Equipment from './component/equipment';
import Information from './component/inoformation';
import { Analytics } from '@vercel/analytics/react';
export default function App() {
    let formData = new FormData();
    formData.append('type', 'admin');
    fetch("https://board.srl.tw/sys/login_ajax.php", {
        method: "POST",
        body: formData,
        headers: {
            'Authorization': `Bearer ${sessionStorage['token']}`,
            'Refresh-Token': localStorage['refresh_token']
        }
    }).then((res) => {

        res.json().then((data) => {
            console.log(data, data.success)
            if (!data.success) {
                alert(data.msg)
                location.href = "https://board.srl.tw";
            }
        })

    });


    return (
        <>

            <Router basename="/">
                <Layout />
                <Content />

            </Router>
            <Analytics />
        </>



    )
}

function Content() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");
    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location]);
    useLayoutEffect(() => {
        let gg;
        let gg2;

        if (transitionStage == "fadeOut") {
            gg = gsap.timeline({ ease: "none" })
            gg.to(`.${transitionStage}`, {

                duration: 0.8,
                opacity: 0,
                onComplete: () => {
                    setDisplayLocation(location);
                    setTransistionStage("fadeIn")
                }
            })
        } else {
            gg2 = gsap.timeline({ ease: "none" })
            gg2.to(`.${transitionStage}`, {

                duration: 1.2,
                opacity: 1,
            })
        }
        return () => {
            if (transitionStage == "fadeOut") {
                gg.revert();
            } else {
                gg2.revert();
            }


        }
    }, [transitionStage])
    return (
        <div
            className={`${transitionStage}`}
            style={location.pathname !== "/" ? { position: "relative", pointerEvents: transitionStage == "fadeOut" ? "auto" : "none", zIndex: 21 } : {}}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={<Home />} />
                <Route path="/lifefunction" element={<LifeFunction />} />
                <Route path="/team/*" element={<Team />} />
                <Route path="/urban" element={<Urban />} />
                <Route path="/calculator" element={<Calculate />} />
                <Route path="/product/*" element={<Product />} />
                <Route path="/news" element={<News />} />
                <Route path="/equipment/*" element={<Equipment />} />
                <Route path="/information" element={<Information />} />
                <Route path="*" element={<><h1 style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>目前頁面正在製作中，請點選空白處回首頁</h1><MoveBack /></>} />
            </Routes>
        </div>
    )
}