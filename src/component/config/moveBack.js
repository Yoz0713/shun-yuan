import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeVideo } from '../redux/action/videoToggle'

const MoveBack = ({ z }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname;
    const [url, setUrl] = useState(path)
    const innerPage = ["/team/portfolio"]

    const handleClick = function () {
        dispatch(closeVideo())
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
        <section className="move-back" onDoubleClick={handleClick} style={{ width: "100%", height: "100%", position: "fixed", zIndex: z, left: 0, top: 0, pointerEvents: url == "/" ? "none" : "auto" }}>

        </section>
    )
}
export default MoveBack
