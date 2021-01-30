import React, { useState } from "react";
import Icon from "../Common/Icon";
import ExperiencesCards from "./ExperienceCards";

export default function Experiences() {
    const [search, setSearch] = useState("");
    const expArray = [1, 2, 3];
    return (
        <div className="w-full">
            <div className="mt-8 flex flex-col w-full px-6">
                <h1 className="text-xl mb-2 font-extrabold text-gray-800 ">
                    Experiences
                </h1>
                <div className=" relative group flex w-full">
                    <input
                        className=" pl-4 pr-12 py-1 text-gray-800 w-full text-sm  group rounded-full border-2 border-gray-300 focus:outline-none  focus:border- "
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="absolute right-0 text-gray-300  group group-hover:text-gray-500 pr-4 pt-2 top-0">
                        <Icon name="search" size={5} color="current" />
                    </button>
                </div>
                <h2 className="text-md mt-8  mb-2 font-extrabold text-gray-800 ">
                    Outdoor Adventures
                </h2>
                <div className="flex overflow-scroll">
                    {expArray.map((item, i) => (
                        <ExperiencesCards item={item} key={i} />
                    ))}
                </div>
                <h2 className="text-md mt-8 mb-2 font-extrabold text-gray-800 ">
                    Special days out
                </h2>
                <div className="flex overflow-scroll">
                    {expArray.map((item, i) => (
                        <ExperiencesCards item={item} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
