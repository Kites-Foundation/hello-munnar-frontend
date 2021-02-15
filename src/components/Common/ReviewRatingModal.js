import React, { useState } from "react";
import Icon from "../Common/Icon";
import Star from "../Common/Star";

export default function ReviewRatingModal({ rating, onClose }) {
    const initialValue = {
        title: "",
        content: "",
        rating: 0,
    };
    const [form, setForm] = useState(initialValue);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleFormSubmit = (key) => {
        // submit review

        onClose();
    };
    return (
        <div className="fixed w-full h-100 inset-0 z-50 overflow-hidden bg-opacity-75 bg-black flex justify-center items-center animated fadeIn faster">
            <form
                onSubmit={handleFormSubmit}
                className="relative bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto px-6 py-10">
                <button
                    onClick={onClose}
                    className="position absolute top-5 right-5">
                    <Icon
                        name="close"
                        className="fill-current text-black"
                        color="black"
                        size={5}
                    />
                </button>
                <h2 className="text-2xl font-semibold">Write a review</h2>
                <div className="mt-3 mb-6 flex">
                    <Star
                        edit={true}
                        num={form.rating}
                        onChange={handleFormChange}
                        name="rating"
                        size={8}
                    />
                </div>

                <input
                    name="title"
                    value={form.title}
                    onChange={handleFormChange}
                    className="border border-black rounded-lg text-xl font-semibold px-2 py-2 w-full"
                    placeholder="Title"
                />

                <textarea
                    name="content"
                    value={form.content}
                    onChange={handleFormChange}
                    className="border border-black h-32 mt-5 rounded-lg px-2 py-2 w-full"
                    placeholder="Description"
                />

                <button
                    type="submit"
                    className="w-full bg-black text-white rounded-lg text-xl font-semibold py-1 mt-5">
                    Submit
                </button>
            </form>
        </div>
    );
}
