import React, { useState } from 'react'

export default function Tip({styles}) {

    const [send, setSubmit] = useState(false)
    const [net, setNet] = useState(0);
    const [tip, setTip] = useState(0);
    const [result, setResult] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmit(!send)
        setResult(calculateResult);
    }
    const calculateResult = () => {
        let netFinal = (net + (net * tip));
        let vat = netFinal * 0.23;
        let result = netFinal + vat;
        return `${result.toFixed(2)} zł`;
    }

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = Number(event.target.value);
        if (name === "net") setNet(value);
        if (name === "tip") setTip(value / 100);
    }

    return (
        <>
            {send ? <div style={styles.result}>{result}</div> : <form onSubmit={submitHandler} style={styles.grid}>
                <input type="number" name="net" onChange={changeHandler} style={styles.input} placeholder="netto" required />
                <select name="tip" id="tip" onChange={changeHandler} style={styles.select} required>
                    <option disabled selected value="0"> -- select tip value -- </option>
                    <option value="5">5%</option>
                    <option value="10">10%</option>
                    <option value="15">15%</option>
                    <option value="20">20%</option>
                </select>
                <button type="submit" style={styles.button}>Calculate</button>
            </form>}

        </>
    )
}
