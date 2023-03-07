import React from 'react';
import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
export function Pdf({ url, active, setActive }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ scale: active == false ? "0" : "1", overflowY: 'hidden', height: '100vh', pointerEvents: "auto", position: "fixed", left: 0, top: 0, zIndex: 2, width: "100%", transition: "0.5s", transformOrigin: "left top" }} >

            <div className="main-pdf" onClick={() => { setActive(false) }} style={{ width: "100%", overflowY: 'scroll', height: '100vh' }}>
                <Document
                    file={url}
                    onLoadSuccess={onDocumentLoadSuccess}

                >
                    {[...Array(numPages)].map((_, index) => (

                        <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={5} />


                    ))}
                </Document>
            </div>


        </div >
    );
}