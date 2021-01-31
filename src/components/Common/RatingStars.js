import React from "react";
import Icon from "./Icon";

export default function RatingStars({
    rating,
    edit = false,
    size = 5,
    handleClickRatings,
}) {
    return (
        <div className="flex px-4">
            {Array.apply(null, {
                length: 5,
            }).map((star, i) => (
                <button
                    onClick={() => {
                        if (edit) handleClickRatings(i + 1);
                    }}
                    className="focus:outline-none">
                    <Icon
                        name="star"
                        size={size}
                        color={i < rating ? "indigo-600" : "gray-300"}
                    />
                </button>
            ))}
        </div>
    );
}
