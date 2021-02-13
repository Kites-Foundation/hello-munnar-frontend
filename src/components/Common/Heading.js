import React from "react";
import Star from "./Star";
import Icon from "./Icon";

const Heading = ({ place, className }) => {
    const {
        name,
        rating,
        price,
        difficulty,
        openTime,
        closeTime,
        availability,
        coordinates,
    } = place;
    const numReviews = place.reviews.length;

    const difficultyStyle = {
        easy: "text-green-500 border-green-500",
        challenging: "text-yellow-500 border-yellow-500",
        adventurer: "text-red-500 border-red-500",
    };

    return (
        <div className={className}>
            <h1 className="font-semibold text-xl">{name}</h1>

            <div className="flex py-1.5 items-center space-x-4">
                {difficulty && (
                    <div
                        className={`px-2 py-0.5 border-2 mr-1 text-sm rounded-md flex items-center justify-center font-semibold capitalize ${
                            difficultyStyle[difficulty.toLowerCase()]
                        }`}>
                        {difficulty}
                    </div>
                )}
                <div className="flex">
                    <Star num={rating} />
                </div>
                <div className="text-cyan-600">
                    {numReviews} Review{numReviews !== 1 && "s"}
                </div>
            </div>

            <div className="flex flex-wrap justify-start py-2">
                {price && (
                    <div className="flex items-center space-x-1 py-1 mr-6">
                        <Icon
                            name="rupee"
                            color="black"
                            className="fill-current text-black"
                            size={5}
                        />
                        <span className="text-sm">{price} INR</span>
                    </div>
                )}
                <div className="flex items-center space-x-1 py-1 mr-6">
                    <Icon
                        name="alarm"
                        color="black"
                        className="fill-current text-black"
                        size={5}
                    />
                    <span className="text-sm">
                        {openTime} - {closeTime}
                    </span>
                </div>
                {availability && (
                    <div className="flex items-center space-x-1 py-1 mr-6">
                        <Icon
                            name="available"
                            color="black"
                            className="fill-current text-black"
                            size={5}
                        />
                        <span className="text-sm">{availability}</span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-12 pt-2 md:pt-4">
                <a
                    href={`https://maps.google.com/?q=${coordinates.lat},${coordinates.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex py-2 items-center justify-center rounded-full border border-black">
                    <span className="text-center">Open In Maps</span>
                    <Icon
                        name="upRight"
                        size={6}
                        stroke={true}
                        className="ml-2 stroke-current text-black"
                        color="black"
                    />
                </a>
            </div>
        </div>
    );
};

export default Heading;
