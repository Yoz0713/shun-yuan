import React from 'react'
import Pdf from '../pdf/Pdf'
import MoveBack from '../config/moveBack'
export default function Information() {
    return (
        <section className="information" style={{ pointerEvents: "none" }}>
            <Pdf url={"/linkouCase.pdf"} />
            <MoveBack z={15} />
        </section>
    )
}
