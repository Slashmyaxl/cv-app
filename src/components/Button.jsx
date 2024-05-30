import { useState } from "react";

export default function Button({ onClick, icon }) {

    return (
        <button onClick={onClick}>
            <img className="icon" src={icon} alt="" />
        </button>
    )
}