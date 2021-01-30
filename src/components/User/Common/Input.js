import React from "react";
import Icon from "../../Common/Icon";

const Input = ({ placeholder, icon }) => {
    return (
            <div class="relative flex w-full flex-wrap items-stretch mb-3">
                <span class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <Icon name={icon} size="w-2" />
                </span>
                <input
                    type="text"
                    placeholder={placeholder}
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                />
            </div>  
    );
};

export default Input;
