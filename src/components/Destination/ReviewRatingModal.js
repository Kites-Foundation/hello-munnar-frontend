import React, { useState } from "react";
import profilePic from "../../assets/images/profilePic.png";
import RatingStars from "../Common/RatingStars";

export default function ReviewRatingModal({ rating, setShow }) {
    const [inputValue, setInputValue] = useState("");
    const handleClickRatings = (key) => {
        // submitt rating

        setShow(false);
    };
    return (
        <div className=" fixed w-full h-100 inset-0 z-50 overflow-hidden bg-opacity-10 bg-black flex justify-center items-center animated fadeIn faster">
            <div className="border border-teal-500  modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <div className="modal-close cursor-pointer ml-auto z-50">
                            <svg
                                onClick={() => {
                                    setShow(false);
                                }}
                                className="fill-current  text-black"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex mx-4">
                        <img
                            className="rounded-full  h-8 w-8 my-1"
                            src={profilePic}
                            alt=""
                        />
                        <div className="text-lg my-4 ml-1 font-semibold">
                            John Doe
                        </div>
                    </div>
                    <RatingStars
                        size={7}
                        edit={true}
                        rating={rating}
                        handleClickRatings={handleClickRatings}
                    />
                    <textarea
                        className="rounded-md w-full mt-4 focus:outline-none  border border-gray-400 p-4 "
                        value={inputValue}
                        rows={4}
                        placeholder="Show details of your experience at this place"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="flex w-full">
                        <div className="flex ml-auto">
                            <button
                                onClick={() => setShow(false)}
                                className="focus:outline-none rounded-lg bg-gray-300 mr-2 px-3 py-2 text-gray-800 hover:bg-gray-400 ">
                                Cancel
                            </button>
                            <button className="focus:outline-none rounded-lg bg-indigo-500 text-white  px-3 py-2 hover:bg-indigo-600 ">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
