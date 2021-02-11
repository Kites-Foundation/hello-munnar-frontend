import React from "react";
import { navigate } from "hookrouter";
import Icon from "../Common/Icon";

const StoryImage = ({ image }) => {
    return (
        <div className="relative w-full">
            <img
                src={image}
                alt=""
                className="w-full h-64 md:h-96 object-cover"
            />
            <button
                className="absolute flex items-center justify-center left-3 top-3 w-12 h-12 rounded-full focus:outline-none"
                onClick={() => navigate("/")}>
                <Icon
                    name="close"
                    color="white"
                    className="text-white"
                    size={7}
                />
            </button>
        </div>
    );
};

export default StoryImage;
