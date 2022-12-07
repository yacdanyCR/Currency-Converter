import React from 'react'
import './style.css'
export const LogoComponent = () => {
    return (
        <section>
            <div className="logo_Section">
                <div className="container">
                    <img src="/logo.png" alt="logo" style={{ width: "35%" }} />
                </div>
            </div>
        </section>
    )
}

export default LogoComponent