import React from "react";
import { A } from "hookrouter";
import Icon from "../Common/Icon";

const Amenity = ({ routeName, iconName, name }) => {
    return (
        <A
            href={`/route/${routeName}`}
            className="flex-1 flex flex-col border-2 border-black rounded-xl">
            <div className="p-3 flex justify-center items-center">
                <Icon
                    name={iconName}
                    className="text-black fill-current"
                    color="black"
                    size={10}
                />
            </div>
            <div className="text-sm flex-1 bg-black text-white text-center px-2 py-3 rounded-b-lg">
                {name}
            </div>
        </A>
    );
};

export default Amenity;
