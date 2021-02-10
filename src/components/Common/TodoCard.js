import React from "react";
import { A } from "hookrouter";

export default function TodoCard({ data }) {
    const { image, name } = data;
    return (
        <div className="relative bg-gray-100 flex-none shadow-lg rounded-lg overflow-hidden w-48 md:w-52 lg:w-60 mr-8 md:mr-16">
            <A href="#">
                <div className="relative pb-full">
                    <img
                        src={image}
                        className="absolute w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <div className="absolute bottom-0">
                    <h3 className="text-lg font-semibold text-white p-3">
                        {name}
                    </h3>
                </div>
            </A>
        </div>
    );
}
