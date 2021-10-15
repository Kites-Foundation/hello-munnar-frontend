import React, { useState, useEffect, useCallback } from "react";
import { A } from "hookrouter";
import Icon from "../../Icon";

export default function CarousalCard({ data }) {
    const { name, description, image, slug, id } = data;
    const [liked, setLiked] = useState(true);

    let getCurrentDestinationFavourites = () => {
        return JSON.parse(
            localStorage.getItem("hello-munnar-destination-favourites")
        );
    };

    let isDestinationAlreadyFavourite = useCallback(() => {
        // Get existing favourites from localstorage
        let currentDestinationFavourites = getCurrentDestinationFavourites();
        console.log(currentDestinationFavourites);
        if (
            currentDestinationFavourites &&
            currentDestinationFavourites.includes(id)
        ) {
            setLiked(true);
            return true;
        } else {
            setLiked(false);
            return false;
        }
    }, [id]);

    let onClickLikeButton = () => {
        console.log("cliked");
        let currentDestinationFavourites = getCurrentDestinationFavourites();
        if (currentDestinationFavourites && liked) {
            const index = currentDestinationFavourites.indexOf(id);
            if (index > -1) {
                currentDestinationFavourites.splice(index, 1);
            }
            localStorage.setItem(
                "hello-munnar-destination-favourites",
                JSON.stringify(currentDestinationFavourites)
            );
        } else if (currentDestinationFavourites && !liked) {
            currentDestinationFavourites.push(id);
            localStorage.setItem(
                "hello-munnar-destination-favourites",
                JSON.stringify(currentDestinationFavourites)
            );
        } else if (!currentDestinationFavourites) {
            console.log("here");
            localStorage.setItem(
                "hello-munnar-destination-favourites",
                JSON.stringify([id])
            );
        }
        isDestinationAlreadyFavourite();
    };

    useEffect(() => {
        isDestinationAlreadyFavourite();
    }, [isDestinationAlreadyFavourite]);

    return (
        <div className="bg-white flex-none shadow-lg rounded-lg overflow-hidden w-64 xl:w-96 mr-8 md:mr-16">
                <div className="relative pb-9/16">
                    <A href={`/destination/${slug}`}>
                        <img
                            src={image[0].formats["thumbnail"].url}
                            className="absolute w-full h-full object-cover"
                            alt=""
                        />
                    </A>
                    <button
                        className="absolute flex items-center justify-center right-1 top-1 w-12 h-12 rounded-full focus:outline-none"
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
                <A href={`/destination/${slug}`}>
                    <div className="py-6 px-3 md:px-6">
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-gray-600 text-sm">
                            {description.substring(0, 70) + "...."}
                        </p>
                    </div>
                </A>
        </div>
    );
}
