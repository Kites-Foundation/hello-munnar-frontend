import React from "react";
import Star from "../Common/Star";
import Icon from "../Common/Icon";

const Heading = ({ destination, className }) => {
    const {
        destinationName,
        destinationRating,
        destinationOpenTime,
        destinationCloseTime,
        destinationAvailability,
        destinationCoordinates,
    } = destination;
    const numReviews = destination.destinationReviews.length;

    return (
        <div className={className}>
            <h1 className="font-semibold text-xl">{destinationName}</h1>

            <div className="flex py-1 items-center space-x-4">
                <div className="flex">
                    <Star num={destinationRating} />
                </div>
                <div className="text-cyan-600">
                    {numReviews} Review{numReviews !== 1 && "s"}
                </div>
            </div>

            <div className="flex flex-wrap justify-start py-2">
                <div className="flex items-center space-x-1 py-1 mr-6">
                    <Icon
                        name="alarm"
                        color="black"
                        className="fill-current text-black"
                        size={5}
                    />
                    <span className="text-sm">
                        {destinationOpenTime} - {destinationCloseTime}
                    </span>
                </div>
                <div className="flex items-center space-x-1 py-1 mr-6">
                    <Icon
                        name="available"
                        color="black"
                        className="fill-current text-black"
                        size={5}
                    />
                    <span className="text-sm">{destinationAvailability}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-12 pt-2 md:pt-4">
                <a
                    href={`https://maps.google.com/?q=${destinationCoordinates.lat},${destinationCoordinates.lon}`}
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
