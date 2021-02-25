import React, { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";

export default function ReviewRatingModal({ onClose }) {
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
        <Modal title="Write a review" onClose={onClose}>
            <form onSubmit={handleFormSubmit}>
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
        </Modal>
    );
}
