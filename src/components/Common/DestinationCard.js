import React, { useState } from "react";
import { A } from "hookrouter";
import Icon from "./Icon";

export default function DestinationCard({ data }) {
    const [liked, setLiked] = useState(data.liked);
    const { bannerImg, routeDestination, destinationDescription } = data;

    const like = () => {
        setLiked(!liked);
        // store liked destination in local storage
    };

    return (
        <div className="bg-white flex-none shadow-lg rounded-lg overflow-hidden w-3/4 md:w-1/2 lg:w-1/4 xl:w-96 mr-8 md:mr-16">
            <div className="relative pb-9/16">
                <img
                    src={bannerImg}
                    className="absolute w-full h-full object-cover"
                    alt=""
                />
                <button
                    className="absolute flex items-center justify-center right-2 top-2 w-12 h-12 rounded-full focus:outline-none"
                    onClick={like}>
                    <Icon
                        name="heart"
                        color={liked ? "red-500" : "white"}
                        stroke={!liked}
                        size={9}
                    />
                </button>
            </div>
            <A href="/destination/1">
                <div className="py-6 px-3 md:px-6">
                    <h3 className="font-semibold">{routeDestination}</h3>
                    <p className="text-gray-600 text-sm">{destinationDescription.substring(0, 80)+"..."}</p>
                </div>
            </A>
        </div>
    );
}
