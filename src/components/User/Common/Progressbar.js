import React from "react";

const Progressbar = ({ progress, color }) => {
    return (
        <div className="progressbar">
            <div className="relative pt-1">
                <div
                    className={`overflow-hidden h-4 mb-4 text-xs flex rounded bg-${color}-200`}>
                    <div
                        style={{ width: progress }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}></div>
                </div>
            </div>
        </div>
    );
};

export default Progressbar;
