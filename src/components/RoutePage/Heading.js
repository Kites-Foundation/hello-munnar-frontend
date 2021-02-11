import React from "react";
import Icon from "../Common/Icon";

const Heading = ({ route, color, className }) => {
    return (
        <div className={className}>
            <div className="pt-6 pb-2 flex justify-between items-center">
                <div
                    className={`px-1 ${color.text} ${color.border} border-2 rounded font-semibold border-solid uppercase`}>
                    {route.name} route
                </div>

                <Icon
                    name="information"
                    className="text-black stroke-2"
                    color="black"
                    stroke={true}
                    size={5}
                />
            </div>
            <h1 className="uppercase text-xl font-semibold pt-3 pb-2">
                {route.path}
            </h1>
            <span className="">{route.description}</span>
        </div>
    );
};

export default Heading;
