import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { navigate } from "hookrouter";

const PlacesBanner = ({ route, image, onLike, destinationId, hasLiked }) => {
    // get initial like value from localStorage

    
    const routeColorName = route?.routes[0].colorName.toLowerCase();

    const colors = {
        violet: "text-violet-900 border-violet-900",
        indigo: "text-indigo-900 border-indigo-900",
        blue: "text-cyan-600 border-cyan-600",
        green: "text-green-500 border-green-500",
        yellow: "text-yellow-500 border-yellow-500",
        orange: "text-amber-600 border-amber-600",
        red: "text-red-500 border-red-500",
    };


    const onClickLike = () => {
            
    };

    return (
        <div className="relative w-full pb-7">
            <img
                src={image}
                alt=""
                className="w-full h-64 md:h-96 object-cover"
            />
            <button
                className="absolute flex bg-white items-center shadow-md justify-center left-8 top-8 w-8 h-8 rounded-full focus:outline-none"
                onClick={() =>
                    window.history.length === 1
                        ? navigate("/")
                        : window.history.back()
                }>
                <Icon
                    name="caretLeft"
                    color="black"
                    stroke={true}
                    className="text-black stroke-current"
                    size={5}
                />
            </button>

            {routeColorName && (
                <div className="absolute flex top-8 right-8 items-center bg-white px-2 py-0.5 rounded-md shadow-md">
                    <Icon
                        name="route"
                        size={4}
                        className={`mr-1 ${
                            colors[routeColorName.toLowerCase()]
                        }`}
                    />
                    <span
                        className={`uppercase font-semibold text-sm ${
                            colors[routeColorName.toLowerCase()]
                        }`}>
                        {routeColorName} Route
                    </span>
                </div>
            )}

            <button
                className="absolute flex items-center justify-center -bottom-0 right-8 w-14 h-14 bg-white shadow-lg rounded-full focus:outline-none"
                onClick={onClickLike}>
                <Icon
                    name="heart"
                    color={hasLiked ? "red-500" : "gray-400"}
                    className={`w-7 h-7 stroke-2 ${hasLiked} ? "fill-current text-red-500" : "stroke-current text-gray-400"`}
                    stroke={!hasLiked}
                    size={7}
                />
            </button>
        </div>
    );
};

export default PlacesBanner;
