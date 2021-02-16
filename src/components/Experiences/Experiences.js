import React, { useEffect, useState } from "react";
import Icon from "../Common/Icon";
import ExperiencesCards from "./ExperienceCards";
import activityData from "../../data/activityData.json";

export default function Experiences() {
    const [search, setSearch] = useState("");
    const [activities, setActivities] = useState(activityData);

    useEffect(() => {
        // delayed search 400ms (to decrease load)
        const timeout = setTimeout(() => {
            // search with precedence for name
            const newActivities = [
                ...new Set([
                    ...activityData.filter(
                        (activity) =>
                            activity.activityName
                                ?.toLowerCase()
                                .indexOf(search.toLowerCase()) !== -1
                    ),
                    ...activityData.filter(
                        (activity) =>
                            activity.activityDescription
                                ?.toLowerCase()
                                .indexOf(search.toLowerCase()) !== -1
                    ),
                ]),
            ];
            setActivities(newActivities);
        }, 400);
        return () => clearTimeout(timeout);
    }, [search]);

    return (
        <div className="bg-gray-200">
            <div className="px-8 md:px-10 pt-9 m-auto bg-white max-w-5xl min-h-screen">
                <h1 className="text-2xl font-semibold text-black pb-5">
                    Experience Places
                </h1>
                <div className="relative flex items-center w-full py-3">
                    <input
                        className="py-3 px-5 pl-12 text-gray-800 w-full group rounded-full border-2 border-gray-300 focus:outline-none focus:border-black transition-all"
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="absolute left-5">
                        <Icon
                            name="search"
                            size={5}
                            color="gray-500"
                            className="fill-current text-gray-500"
                        />
                    </button>
                </div>

                {activities?.length > 0 ? (
                    <div className="mt-12 grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {activities.map((item, i) => (
                            <ExperiencesCards item={item} key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 w-full text-center text-2xl text-gray-600 font-medium">
                        No results
                    </div>
                )}
            </div>
        </div>
    );
}
