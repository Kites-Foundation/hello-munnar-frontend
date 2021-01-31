import React from "react";
import "./Switchcomp.css";

const Switchcomp = () => {
    return (
        <div>
            <div className="content">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

export default Switchcomp;
