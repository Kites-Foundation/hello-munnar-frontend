import React, { useState } from "react";
import { A } from "hookrouter";
import Icon from "./Icon";

export default function DestinationCard({ data }) {
    const [liked, setLiked] = useState(data.liked);
    const { image, name, description } = data;

    const like = () => {
        setLiked(!liked);
        // store liked destination in local storage
    };

    return (
        <div className="bg-gray-100 flex-none shadow-lg rounded-lg overflow-hidden w-3/4 md:w-1/2 lg:w-1/4 xl:w-96 mr-8 md:mr-16">
            <div className="relative pb-3/4">
                <img
                    src={image}
                    className="absolute w-full h-full object-cover"
                    alt=""
                />
                <button
                    className="absolute flex items-center justify-center right-2 top-2 w-14 h-14 rounded-full focus:outline-none"
                    onClick={like}>
                    <Icon
                        name="heart"
                        color={liked ? "red-500" : "white"}
                        stroke={!liked}
                        size={10}
                    />
                </button>
            </div>
            <A href="#">
                <div className="py-6 px-3 md:px-6 h-32">
                    <h3 className="text-lg font-semibold overflow-ellipsis overflow-hidden">
                        {name}
                    </h3>
                    <p className="text-gray-600 text-base overflow-ellipsis overflow-hidden">
                        {description}
                    </p>
                </div>
            </A>
        </div>
    );
}
