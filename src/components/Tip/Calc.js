import React from "react";
import Tip from "./Tip"
import TipClass from "./TipClass";

const styles = {
    display: 'flex',
    justifyContent: "space-evenly",
    grid: {
        display: "grid",
        placeContent: "center",
    },
    input: {
        padding: '1em',
        margin: '1em 0',
        borderRadius: '0.5em',
        background: "#f5e8c7",
        border: "none"
    },
    select: {
        padding: '1em',
        margin: '1em 0',
        borderRadius: '0.5em',
        background: "#deba9d",
        border: "none"
    },
    button: {
        padding: '1em',
        background: "#7fc8a9",
        border: "none",
        borderRadius: "0.5em",
        color: "#261c2c",
        cursor: "pointer"
    },
    result: {
        textAlign: "center",
        background: "#b85c38",
        width: "100px",
        margin: "1em auto",
        padding: "2em 1em",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px"
    }
}

export default function Calc() {
    return (
        <div style={styles}>
            <Tip styles={styles} />
            <TipClass styles={styles} />
        </div>
    )
}