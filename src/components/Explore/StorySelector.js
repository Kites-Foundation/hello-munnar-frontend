import React from "react";

const StorySelector = ({ title, label, color }) => {
    return (
        <div className="flex flex-col items-center overflow-ellipsis overflow-hidden cursor-pointer">
            <div
                className={`flex justify-center items-center w-9 h-9 lg:w-16 lg:h-16 shadow-md transition-shadow transition duration-200 ease-in-out hover:shadow-lg ${color} rounded-lg`}>
                <span className="text-white text-xl font-semibold">
                    {title}
                </span>
            </div>
            <span className="mt-2 leading-4 text-xs font-light text-center md:text-sm">
                {label}
            </span>
        </div>
    );
};

export default StorySelector;
