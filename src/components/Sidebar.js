import React, { useEffect, useState } from 'react'
import Logo from "../assets/images/prospa-logo2.svg"

export default function Sidebar() {
    const [dateEl, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().getFullYear());
    }, [dateEl])

    return (
        <div>
            <div className="sidebar">
                <div className="logo">
                    <img src={Logo} alt="Prospa" />
                </div>

                <div className="side__footer">
                    <span>&#169; {dateEl}</span>Prospa Inc
                </div>
            </div> 
        </div>
    )
}
