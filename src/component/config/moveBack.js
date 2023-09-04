import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MoveBack = ({ z }) => {
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname;
    const [url, setUrl] = useState(path)
    const innerPage = ["/team/portfolio", "/product/floor/choosefloor", "/product/floorPlan"]

    const handleClick = function () {
        if (innerPage.includes(path)) {
            navigate(-1);
        } else {
            navigate("/");
        }
    }

    useEffect(() => {
        setUrl(path)
    }, [path]);
    return (
        <section className="move-back" onClick={handleClick} style={{ width: "100%", height: "100%", position: "fixed", zIndex: z, left: 0, top: 0, pointerEvents: url == "/" ? "none" : "auto" }}>

        </section>
    )
}
export default MoveBack
