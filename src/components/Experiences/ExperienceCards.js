import React from "react";
import { A } from "hookrouter";
import TruncatedText from "../Common/TruncatedText";

export default function ExperiencesCards({ item }) {
    return (
        <A
            href={`/activity/${item?.activitiesId}`}
            className="w-full relative shadow-lg rounded-md">
            <div className="w-full relative pb-9/16">
                <img
                    src={item?.bannerImg}
                    alt=""
                    className=" bg-gray-100 absolute object-cover rounded-t-md  w-full h-full"
                />
                <div className="bg-black bg-opacity-20 absolute rounded-t-md  w-full h-full"></div>
            </div>
            <div className="flex flex-col p-4">
                <h3>{item?.activityName}</h3>
                <TruncatedText
                    className="text-gray-600 text-sm mt-1"
                    maxLength={60}
                    content={item.activityDescription}
                    showReadMore={false}
                />
            </div>
        </A>
    );
}
