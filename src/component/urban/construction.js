import React from 'react'

export default function Construction({ url, para }) {
    return (
        <div className="construction">
            <div className="left">
                <div className="imgBox">
                    <img src={url} />
                </div>
            </div>
            <div className="right">
                <div className="titleBox">
                    <h2>{para.title}</h2>
                </div>
                <div className="paraBox">
                    <p>{para.para1}</p>
                    <p>{para.para2}</p>
                </div>
            </div>
        </div>
    )
}
