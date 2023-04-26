import React from 'react'
import Exterior from './exterior'
import Cafe from './cafe'
import { Route, Routes } from 'react-router-dom'
import Planet from './planet'
export default function Product() {
    return (
        <section className='product'>

            <Routes>
                <Route path="/exterior" element={<Exterior />} />
                <Route path="/planet" element={<Planet />} />
                <Route path="/cafe" element={<Cafe />} />
            </Routes>

        </section>
    )
}
