import React from "react";
import { A } from "hookrouter";

export default function StoryCard({ data }) {
    const { name, slug, images } = data;
    return (
        <div className="relative bg-gray-100 flex-none shadow-lg rounded-lg overflow-hidden w-48 md:w-52 lg:w-60 mr-8 md:mr-16">
            <A href={`/activity/${slug}`}>
                <div className="relative pb-full">
                    <img
                        src={images[0].formats["thumbnail"].url}
                        className="absolute w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <div className="absolute bottom-0">
                    <h3 className="text-base font-semibold text-white p-3">
                        {name}
                    </h3>
                </div>
            </A>
        </div>
    );
}
