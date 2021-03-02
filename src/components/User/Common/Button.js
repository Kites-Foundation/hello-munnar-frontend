import React from "react";
import Icon from "../../Common/Icon";

const Button = ({ text, icon, ...rest }) => {
    return (
        <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <span className="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <Icon name={icon} size="w-2" />
            </span>
            <input
                type="button"
                value={text}
                {...rest}
                className="px-3 py-3 placeholder-gray-400 text-black relative bg-white bg-white rounded text-sm border-0 border-b-2 border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pl-10"
            />
        </div>
    );
};

export default Button;
