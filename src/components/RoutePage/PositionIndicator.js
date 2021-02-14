import React from "react";
import { A } from "hookrouter";

const PositionIndicator = ({ position, routes }) => {
    return (
        <div className="w-full bg-black h-8 flex items-center justify-center space-x-2 md:space-x-4 px-2">
            {routes.map((route, i) => (
                <A
                    href={`/route/${route}`}
                    key={i}
                    className={`w-10 h-1.5 md:w-12 lg:w-16 ${
                        position === i ? "" : "bg-opacity-25"
                    } bg-white rounded-full`}
                />
            ))}
        </div>
    );
};

export default PositionIndicator;
