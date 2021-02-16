import React, { useState, useEffect } from "react";
import Icon from "../Common/Icon";
import { getManyActivity } from "../../data/dataUtils";

// import { AiFillHeart } from "react-icons/ai";

export default function FavouriteCard(props) {
    const [liked, setLiked] = useState(true);
    let activityId = props.activityId;
    let isActivityAlreadyFavourite = (activityId) => {
        let currentActivityFavourites = JSON.parse(
            localStorage.getItem("hello-things-to-do-favourites")
        );
        if (
            currentActivityFavourites &&
            currentActivityFavourites.includes(activityId)
        ) {
            setLiked(true);
            return true;
        } else {
            setLiked(false);
            return false;
        }
    };

    let onClickLikeButton = () => {
        let currentActivityFavourites = JSON.parse(
            localStorage.getItem("hello-things-to-do-favourites")
        );
        if (isActivityAlreadyFavourite(activityId)) {
            currentActivityFavourites.splice(
                currentActivityFavourites.indexOf(activityId),
                1
            );
            localStorage.setItem(
                "hello-things-to-do-favourites",
                JSON.stringify(currentActivityFavourites)
            );
        } else if (
            currentActivityFavourites &&
            !currentActivityFavourites.includes(activityId)
        ) {
            localStorage.setItem(
                "hello-things-to-do-favourites",
                JSON.stringify([activityId, ...currentActivityFavourites])
            );
        } else if (!currentActivityFavourites && activityId) {
            localStorage.setItem(
                "hello-things-to-do-favourites",
                JSON.stringify([activityId])
            );
        }
        isActivityAlreadyFavourite(activityId);
        currentActivityFavourites = JSON.parse(
            localStorage.getItem("hello-things-to-do-favourites")
        );
        props.setActivities(getManyActivity(currentActivityFavourites));
    };

    useEffect(() => {
        isActivityAlreadyFavourite(activityId);
    });
    return (
        <div className="mb-6">
            <div>
                <div className="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="col-span-3 row-span-4">
                        <img
                            src={props.image}
                            alt="Placeholder"
                            className="object-cover h-32 w-full"
                        />
                    </div>

                    <div className="col-span-3 row-span-1">
                        <header className="mt-3 flex items-center justify-between leading-tight p-2 mx-2">
                            <h1 className="text-xl">{props.name}</h1>

                            <div onClick={() => onClickLikeButton()}>
                                <Icon
                                    name="heart"
                                    color={liked ? "red-500" : "gray-400"}
                                    className={`w-7 h-7 stroke-2 ${liked} ? "fill-current text-red-500" : "stroke-current text-gray-400"`}
                                    stroke={!liked}
                                    size={7}
                                />
                            </div>
                        </header>
                    </div>

                    <div className="p-4 col-span-3 row-span-1 mb-1">
                        <ul className="flex flex-row text-gray-600 space-x-4">
                            <li className="py-1">
                                <div className="flex item-center space-x-1">
                                    <div className="flex items-center">
                                        <Icon name="route" size={4} />
                                    </div>
                                    <p className="text-l">{props.route}</p>
                                </div>
                            </li>
                            {/* <li className="py-1">
                                <div className="flex item-center space-x-1">
                                    <div className="flex items-center">
                                        <Icon name="time" size={4} />
                                    </div>
                                    <p className="text-l">{props.time}</p>
                                </div>
                            </li>

                            <li className="py-1">
                                <div className="flex item-center space-x-1">
                                    <div className="flex items-center">
                                        <Icon name="date" size={4} />
                                    </div>
                                    <p className="text-l">{props.day}</p>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
