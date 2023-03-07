import React, { useState, useEffect } from 'react'

export default function RunNumber({ target, speed, delay }) {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        let timer;
        setTimeout(() => {
            let num = 0
            timer = setInterval(() => {
                num++
                if (num == target + 1) {
                    clearInterval(timer)
                    return
                } else {
                    setNumber(num)
                }
            }, speed)


        }, delay)

        return () => {
            clearInterval(timer)
        }

    }, []);

    return (
        <span>
            {number}
        </span>
    )
}
