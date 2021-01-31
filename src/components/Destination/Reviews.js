import React, { useState } from "react";
import profilePic from "../../assets/images/profilePic.png";
import RatingStars from "../Common/RatingStars";
import ReviewRatingModal from "./ReviewRatingModal";

export default function Reviews() {
    const [rating, setRating] = useState(3);
    const [showRatingModal, setShowRatingModal] = useState(false);
    const handleClickRatings = (key) => {
        setShowRatingModal(true);
        setRating(key);
    };
    return (
        <div>
            <div className="text-xl font-semibold m-4">Rate and Review</div>
            <RatingStars
                size={7}
                edit={true}
                rating={rating}
                handleClickRatings={handleClickRatings}
            />
            <div className="flex mx-4 mt-4">
                <img
                    className="rounded-full  h-8 w-8 my-1"
                    src={profilePic}
                    alt=""
                />
                <div className="text-sm my-auto ml-1 font-semibold">
                    John Doe
                </div>
            </div>
            <RatingStars rating={3} />
            <div className="px-4 text-sm">Awsome Place! Dont miss it</div>
            {showRatingModal && (
                <ReviewRatingModal
                    setShow={setShowRatingModal}
                    rating={rating}
                />
            )}
        </div>
    );
}
