import React, { useEffect, useRef, useState } from 'react'

const requireWebp = require.context("../../../img/calculator/webp", false, /^\.\/.*\.webp$/);
const webp = requireWebp.keys().map(requireWebp);
export default function Calculate() {
    return (
        <section className='calculate'>
            <Calculator />
            <div className="imgBox">
                <img src={webp[0].default} />
            </div>
        </section>
    )
}

function Calculator() {
    const [inputValues, setInputValues] = useState({
        loanYear: "",
        totalPrice: "",
        interestRatio: "",
        allowancePeriod: "0",
    });
    const [resultValues, setResultValues] = useState({
        deposit: "",
        sign: "",
        firstFloor: "",
        eighthFloor: "",
        sixteenThFloor: "",
        construction: "",
        license: "",
        delivery: "",
        ownMoney: "",
        loanMoney: "",
        monthlyCost: "",
        interestRepayment: "",
        allowancePeriodCost: "",
        afterAllowancePeriodCost: "",
    })
    const [showKyb, setShowKyb] = useState(false)

    const [kybPosition, setKybPosition] = useState({ x: 0, y: 0 })
    const [kybTarget, setKybTarget] = useState(null)
    const handleInputChange = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value,
        });
    };
    const handleFocus = (e) => {
        console.log(e.target.blur())
        setKybPosition({ x: e.target.offsetLeft + "px", y: e.target.offsetTop + "px" })
        setKybTarget(e.target.name)
        setShowKyb(true)
    }
    const handleKybInput = (e) => {
        const regex = /\./
        let flag = true
        if (regex.test(inputValues[kybTarget])) {
            flag = false
        }
        if (e.target.outerText !== "Delete" && e.target.outerText != ".") {
            setInputValues({
                ...inputValues,
                [kybTarget]: `${inputValues[kybTarget] + e.target.value}`,
            });

        } else if (e.target.outerText == "Delete") {
            setInputValues({
                ...inputValues,
                [kybTarget]: `${inputValues[kybTarget].slice(0, -1)}`,
            });
        } else {
            if (flag) {
                setInputValues({
                    ...inputValues,
                    [kybTarget]: `${inputValues[kybTarget] + `.`}`,
                });
            }

        }

    }
    const handleClearClick = () => {
        setInputValues({
            loanYear: '',
            totalPrice: '',
            interestRatio: '',
            allowancePeriod: '',
        });
        setResultValues({
            deposit: "",
            sign: "",
            firstFloor: "",
            eighthFloor: "",
            sixteenThFloor: "",
            construction: "",
            license: "",
            delivery: "",
            ownMoney: "",
            loanMoney: "",
            monthlyCost: "",
            allowancePeriodCost: "",
            afterAllowancePeriodCost: ""
        })
    };
    const handleResult = () => {
        const monthRatio = inputValues.interestRatio / 12 / 100;
        //-- 寬限年>0 --
        let loanMonth;
        let periodMoney;
        let avgMonthRatio;
        let totalMoney;
        if ((inputValues.allowancePeriod) > 0) {
            //-- 月數= (貸款年限*12)-(寬限年*12) --
            loanMonth = ((inputValues.loanYear) * 12) - ((inputValues.allowancePeriod) * 12);
            periodMoney = ((inputValues.totalPrice * 0.75) * monthRatio) * 10000;
            avgMonthRatio = ((Math.pow((1 + monthRatio), loanMonth)) * monthRatio) / ((Math.pow(1 + monthRatio, loanMonth)) - 1);
        } else {
            //-- 月數= 貸款年限*12 --
            loanMonth = (inputValues.loanYear) * 12;
            avgMonthRatio = ((Math.pow((1 + monthRatio), loanMonth)) * monthRatio) / ((Math.pow(1 + monthRatio, loanMonth)) - 1);

            totalMoney = Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000 * loanMonth)
        }


        const toMoneyStyle = (num) => {
            return num.toLocaleString('zh-TW', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
        }
        setResultValues({
            deposit: 10,
            sign: toMoneyStyle(inputValues.totalPrice * 0.1 - 10),
            firstFloor: toMoneyStyle(inputValues.totalPrice * 0.02),
            eighthFloor: toMoneyStyle(inputValues.totalPrice * 0.02),
            sixteenThFloor: toMoneyStyle(inputValues.totalPrice * 0.02),
            construction: toMoneyStyle(inputValues.totalPrice * 0.02),
            license: toMoneyStyle(inputValues.totalPrice * 0.02),
            delivery: toMoneyStyle(inputValues.totalPrice * 0.05),
            ownMoney: toMoneyStyle(inputValues.totalPrice * 0.25),
            loanMoney: toMoneyStyle((inputValues.totalPrice * 0.75)),
            monthlyCost: toMoneyStyle(Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000)),
            interestRepayment: toMoneyStyle((totalMoney - inputValues.totalPrice * 0.75 * 10000) / loanMonth),
            allowancePeriodCost: toMoneyStyle(Math.floor(periodMoney)),
            afterAllowancePeriodCost: toMoneyStyle(Math.floor(inputValues.totalPrice * 0.75 * avgMonthRatio * 10000))
        });
    };

    return (
        <section className="calculator">
            <div className="title">
                <h2>CALCULATION</h2>
            </div>
            <div className="parameters">
                <div className="box">
                    <label>
                        <p>貸款年限</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onFocus={handleFocus} onChange={handleInputChange} name="loanYear" value={inputValues.loanYear} />
                            <span>年</span>
                        </div>

                    </label>
                </div>
                <div className="box">
                    <label>
                        <p>總價</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onFocus={handleFocus} onChange={handleInputChange} name="totalPrice" value={inputValues.totalPrice} />
                            <span>萬元</span>
                        </div>

                    </label>
                </div>
                <div className="box">
                    <label>
                        <p>年利率</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onFocus={handleFocus} onChange={handleInputChange} name="interestRatio" value={inputValues.interestRatio} />
                            <span>%</span>
                        </div>

                    </label>
                </div>
                <div className="box">
                    <label>
                        <p>寬限期</p>
                        <div className="unitBox">
                            <input type="text" autoComplete="off" onFocus={handleFocus} onChange={handleInputChange} name="allowancePeriod" value={inputValues.allowancePeriod} />
                            <span>年</span>
                        </div>

                    </label>
                </div>
            </div>
            <div className="button">
                <div className="calc" onClick={() => {
                    if (inputValues.totalPrice && inputValues.loanYear && inputValues.interestRatio) {
                        handleResult()
                    }
                }}>
                    <p>試算</p>
                </div>
                <div className="delete" onClick={handleClearClick}>
                    <p>清除</p>
                </div>
                <div className="print" onClick={() => {
                    window.print()
                }}>
                    <p>列印</p>
                </div>
            </div>
            <div className="result">
                <div className="left">
                    <div className="box">
                        <p>訂金:</p><span>{resultValues.deposit}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>簽約金:</p><span>{resultValues.sign}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>1樓底板:</p><span>{resultValues.firstFloor}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>8樓底板:</p><span>{resultValues.eighthFloor}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>16樓底板:</p><span>{resultValues.sixteenThFloor}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>結構完成:</p><span>{resultValues.construction}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>使照申請:</p><span>{resultValues.license}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>交屋款:</p><span>{resultValues.delivery}</span><p>萬元</p>
                    </div>
                </div>
                <div className="right">
                    <div className="box">
                        <p>自備款:</p><span>{resultValues.ownMoney}</span><p>萬元</p>
                    </div>
                    <div className="box">
                        <p>貸款:</p><span>{resultValues.loanMoney}</span><p>萬元</p>
                    </div>

                    {inputValues.allowancePeriod > 0 ?
                        <>
                            <div className="box">
                                <p>寬限期:</p><span>{resultValues.allowancePeriodCost}</span><p>元</p>
                            </div>
                            <div className="box">
                                <p>寬限期後:</p><span>{resultValues.afterAllowancePeriodCost}</span><p>元</p>
                            </div>
                        </> :
                        <>
                            <div className="box">
                                <p>本利攤還:</p><span>{resultValues.monthlyCost}</span><p>元</p>
                            </div>
                            <div className="box">
                                <p>還息金額:</p><span>{resultValues.interestRepayment}</span><p>元</p>
                            </div>

                        </>

                    }

                    <div className="box">
                        <p>暫收款:</p><span></span><p>萬元</p>
                    </div>
                </div>





            </div>
            <VirtualKeyboard handleKybInput={handleKybInput} showKyb={showKyb} position={kybPosition} setShowKyb={setShowKyb} />
        </section>
    )
}


function VirtualKeyboard({ showKyb, position, setShowKyb, handleKybInput }) {
    const liStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "0 0 33.3%",
        height: "25%",
        border: "1px solid #ccc",
        cursor: "pointer",
        pointerEvents: "auto",
        fontSize: "0.8vw",
        color: "#1a1a1a",
        fontWeight: "600"
    }
    const closeStyle = {

        position: "absolute",
        backgroundColor: "#c3a457",
        width: "100%", height: "1px",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto"
    }
    return (
        <ul className='keyboard' style={{ display: showKyb ? "flex" : "none", flexWrap: "wrap", width: "15vw", height: "15vw", position: "absolute", left: `calc(${position.x} + 8vw)`, top: `calc(${position.y} + 4vw)`, backgroundColor: "#f7f7f7", border: "1px solid #ccc" }}>
            {[...Array(9)].map((item, i) => {
                return (
                    <li value={i + 1} style={liStyle} onClick={handleKybInput} key={i}>{i + 1}</li>
                )

            })}
            <li value={0} style={liStyle} onClick={handleKybInput}>0</li>
            <li value={"."} style={liStyle} onClick={handleKybInput}>.</li>
            <li value={"delete"} style={liStyle} onClick={handleKybInput}>Delete</li>
            <div className="close" style={{ position: "absolute", right: "0vw", top: "-2vw", cursor: "pointer", pointerEvents: "auto", width: "1.5vw", height: "1.5vw" }} onClick={() => {
                setShowKyb(false)
            }}>
                <div className="line1" style={{ ...closeStyle, transform: "rotate(45deg)" }}></div>
                <div className="line2" style={{ ...closeStyle, transform: "rotate(-45deg)" }}></div>
            </div>
        </ul>
    )
}