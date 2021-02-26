import React, { useState, useEffect } from "react";
import { A } from "hookrouter";
import Icon from "./Icon";

export default function DestinationCard({ data }) {
    const {
        bannerImg,
        routeDestination,
        destinationDescription,
        destinationId,
    } = data;
    const [liked, setLiked] = useState(true);
    let isDestinationAlreadyFavourite = (destinationId) => {
        let currentDestinationFavourites = JSON.parse(
            localStorage.getItem("hello-munnar-activites-favourites")
        );
        if (
            currentDestinationFavourites &&
            currentDestinationFavourites.includes(destinationId)
        ) {
            setLiked(true);
            return true;
        } else {
            setLiked(false);
            return false;
        }
    };

    let onClickLikeButton = () => {
        let currentDestinationFavourites = JSON.parse(
            localStorage.getItem("hello-munnar-activites-favourites")
        );
        if (isDestinationAlreadyFavourite(destinationId)) {
            currentDestinationFavourites.splice(
                currentDestinationFavourites.indexOf(destinationId),
                1
            );
            localStorage.setItem(
                "hello-munnar-activites-favourites",
                JSON.stringify(currentDestinationFavourites)
            );
        } else if (
            currentDestinationFavourites &&
            !currentDestinationFavourites.includes(destinationId)
        ) {
            localStorage.setItem(
                "hello-munnar-activites-favourites",
                JSON.stringify([destinationId, ...currentDestinationFavourites])
            );
        } else if (!currentDestinationFavourites && destinationId) {
            localStorage.setItem(
                "hello-munnar-activites-favourites",
                JSON.stringify([destinationId])
            );
        }
        isDestinationAlreadyFavourite(destinationId);
    };

    useEffect(() => {
        isDestinationAlreadyFavourite(destinationId);
    });

    return (
        <A href={`/destination/${destinationId}`}>
            <div className="bg-white flex-none shadow-lg rounded-lg overflow-hidden w-64 xl:w-96 mr-8 md:mr-16">
                <div className="relative pb-9/16">
                    <img
                        src={bannerImg}
                        className="absolute w-full h-full object-cover"
                        alt=""
                    />
                    <button
                        className="absolute flex items-center justify-center right-2 top-2 w-12 h-12 rounded-full focus:outline-none"
                        onClick={() => {
                            onClickLikeButton();
                        }}>
                        <Icon
                            name="heart"
                            color={liked ? "red-500" : "white"}
                            stroke={!liked}
                            size={9}
                        />
                    </button>
                </div>
                <div className="py-6 px-3 md:px-6">
                    <h3 className="font-semibold">{routeDestination}</h3>
                    <p className="text-gray-600 text-sm">
                        {destinationDescription.substring(0, 80) + "..."}
                    </p>
                </div>
            </div>
        </A>
    );
}
