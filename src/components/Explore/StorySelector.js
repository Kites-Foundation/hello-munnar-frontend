import React from "react";
import { A } from "hookrouter";

const StorySelector = ({ title, label, color }) => {
    return (
        <A
            href={`/route/${label}`}
            className="flex flex-col items-center overflow-ellipsis overflow-hidden cursor-pointer">
            <div
                className={`flex justify-center items-center w-9 h-9 lg:w-16 lg:h-16 shadow-md transition-shadow transition duration-200 ease-in-out hover:shadow-lg ${color} rounded-lg`}>
                <span className="text-white text-xl font-semibold">
                    {title}
                </span>
            </div>
            <span className="mt-2 leading-4 capitalize text-xs font-light text-center md:text-sm">
                {label} route
            </span>
        </A>
    );
};

export default StorySelector;
