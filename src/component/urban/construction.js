import React from 'react'

export default function BasicContent({ para }) {
    return (
        <div className="basicContent">
            <div className="left">
                <div className="imgBox">
                    <img src={para.img} />
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
