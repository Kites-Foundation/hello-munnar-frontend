import React, { useState } from "react";
import Star from "./Star";
import Icon from "./Icon";
import BookingModal from "./BookingModal";

const Heading = ({ destinationData, className }) => {
    const [showBookingModal, setShowBookingModal] = useState(false);
    const closeBookingModal = () => {
        setShowBookingModal(false);
    };
    const {
        name,
        openingTime,
        closingTime,
        days,
        location,
        reviews,
        difficulty,
        price,
        bookingDetails,
    } = destinationData;
    console.log(destinationData);
    const difficultyStyle = {
        easy: "text-green-500 border-green-500",
        moderate: "text-yellow-500 border-yellow-500",
        difficult: "text-red-500 border-red-500",
    };

    let getAvailableDays = (days) => {
        let availableDays = Object.keys(days).filter(
            (key) => days[key] === true
        );

        let formatedAvailableDays = [];

        availableDays.forEach((day, id) => {
            formatedAvailableDays.push(
                `${day.substring(0, 3).toUpperCase()} ${
                    id !== availableDays.length - 1 ? "• " : ""
                }`
            );
        });
        return formatedAvailableDays;
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
                    <Star
                        num={
                            reviews?.length &&
                            reviews.reduce(
                                (initial, current) => initial + current.rating,
                                0
                            )
                        }
                    />
                </div>
                <div className="text-cyan-600">
                    {reviews?.length || "0"} Review
                    {reviews?.length !== 1 && "s"}
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
                        <span className="text-sm">{price}</span>
                    </div>
                )}
                {openingTime && closingTime && (
                    <div className="flex items-center space-x-1 py-1 mr-6">
                        <Icon
                            name="alarm"
                            color="black"
                            className="fill-current text-black"
                            size={5}
                        />
                        <span className="text-sm">
                            {new Date(
                                `7/10/2013 ${openingTime}`
                            ).toLocaleString("en-US", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                            })}
                            -
                            {new Date(
                                `7/10/2013 ${closingTime}`
                            ).toLocaleString("en-US", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                            })}
                        </span>
                    </div>
                )}
                {days && (
                    <div className="flex items-center space-x-1 py-1 mr-6">
                        <Icon
                            name="available"
                            color="black"
                            className="fill-current text-black"
                            size={5}
                        />
                        <span className="text-sm">
                            {getAvailableDays(days)}
                        </span>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-12 pt-2 md:pt-4 pb-6">
                {location && location.latitude && location.longitude && (
                    <a
                        href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex py-2 items-center justify-center rounded-full border border-black">
                        <span className="ml-1 mr-1 text-center">Open Map</span>
                        <Icon
                            name="upRight"
                            size={6}
                            stroke={true}
                            className="stroke-current text-black"
                            color="black"
                        />
                    </a>
                )}
                {/*todo*/}
                {(bookingDetails?.bookingContactNumber ||
                    bookingDetails?.bookingLink) && (
                    <>
                        <button
                            onClick={() => setShowBookingModal(true)}
                            className="flex font-medium py-2 items-center justify-center rounded-full border border-black bg-black text-white">
                            <span className="text-center">Book</span>
                        </button>
                        {showBookingModal && (
                            <BookingModal
                                onClose={closeBookingModal}
                                details={bookingDetails}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Heading;
