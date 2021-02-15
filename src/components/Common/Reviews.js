import React, { useState } from "react";
import ReviewRatingModal from "./ReviewRatingModal";
import Icon from "../Common/Icon";
import Star from "../Common/Star";

export default function Reviews({ id }) {
    const [showRatingModal, setShowRatingModal] = useState(false);

    // fetch reviews from backend
    const reviews = [];

    return (
        <div className="py-2 relative pb-24">
            {reviews.length > 0 ? (
                reviews.map((review, i) => (
                    <div
                        className="p-4 border-2 border-black rounded-xl my-5"
                        key={i}>
                        <div className="font-semibold text-lg">
                            {review.title}
                        </div>
                        <div className="flex items-center mt-1">
                            {review.author.image ? (
                                <img
                                    src={review.author.image}
                                    alt=""
                                    className="w-8 h-8 rounded-full"
                                />
                            ) : (
                                <Icon
                                    name="avatar"
                                    className="text-black fill-current"
                                    color="black"
                                    size={8}
                                />
                            )}
                            <span className="ml-3 font-medium">
                                {review.author.name}
                            </span>
                        </div>
                        <div className="flex items-center pt-2">
                            <Star num={review.rating} />
                            <div className="ml-3 flex items-center">
                                <Icon
                                    name="available"
                                    className="text-black fill-current mr-2"
                                    color="black"
                                    size={5}
                                />
                                <span className="">{review.date}</span>
                            </div>
                        </div>
                        <div className="pt-3">{review.review}</div>
                    </div>
                ))
            ) : (
                <div className="h-48 font-bold uppercase text-2xl text-gray-400 justify-center flex items-center">
                    No reviews
                </div>
            )}
            <button
                onClick={() => setShowRatingModal(true)}
                className="fixed bottom-10 right-10 h-16 w-16 bg-black rounded-full flex justify-center items-center focus:outline-none">
                <Icon
                    name="edit"
                    className="text-white fill-current mr-2 relative left-1"
                    color="white"
                    size={7}
                />
            </button>
            {showRatingModal && (
                <ReviewRatingModal onClose={() => setShowRatingModal(false)} />
            )}
        </div>
    );
}
