import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FloorHeight from './floorHeight'
import Parking from './parking'
import FloorThick from './floorThick'
import Cement from './cement'
import Brick from './brick'
import WaterPurifier from './waterPurifier'
import Dehumidifier from './dehumidifier'
import Garbage from './garbage'
import SplitText from "../config/splitText"
export default function Equipment() {
    return (
        <EquipmentContainer>
            <Routes>
                <Route path="/parking" element={<Parking />} />
                <Route path="/floorHeight" element={<FloorHeight />} />
                <Route path="/cement" element={<Cement />} />
                <Route path="/floorThick" element={<FloorThick />} />
                <Route path="/brick" element={<Brick />} />
                <Route path="/waterPurifier" element={<WaterPurifier />} />
                <Route path="/dehumidifier" element={<Dehumidifier />} />
                <Route path="/garbage" element={<Garbage />} />
            </Routes>
        </EquipmentContainer>
    )
}


function EquipmentContainer({ children }) {

    return (
        <section className='equipment'>
            <div className="bg" style={{ position: "absolute", left: 0, top: 0, height: "100%", zIndex: 0, }}>
                <img src={require("../../../img/equipment/svg/000-equipment-bg.svg")} style={{ height: "100%", width: "auto" }} />
            </div>
            <div className="content" style={{ position: "relative", width: "100%", height: "100%", }}>
                {children}
            </div>
        </section>
    )
}

export const EquipmentTitle = () => {
    return (
        <div className="titleBox">
            <h2><SplitText text={"EXQUISITE CRAFTSMANSHIP"} /></h2>
            <div className="line"></div>
        </div>
    )
}

