import React, { useState } from "react";
import FavouriteActivityCard from "./FavouriteActivityCard.js";
import { getManyActivity, getRoute } from "../../data/dataUtils";

export default function FavouriteActivities() {
    let currentActivityFavourites = JSON.parse(
        localStorage.getItem("hello-things-to-do-favourites")
    );
    let [activities, setActivities] = useState(
        getManyActivity(currentActivityFavourites)
    );
    return (
        <div>
            <div className="px-8 md:px-10 mt-8 grid grid-cols-1 gap-6 md1:gap-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {activities.map((activity, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full overflow-hidden bg-white rounded-lg shadow-md cursor-pointer">
                            <FavouriteActivityCard
                                activityId={activity.activitiesId}
                                name={activity.activityName || null}
                                route={
                                    getRoute(activity.activityRouteId)
                                        .routeColorName || null
                                }
                                time={
                                    activity.activityOpenTime ||
                                    activity.activityCloseTime ||
                                    null
                                }
                                setActivities={setActivities}
                                image={activity.bannerImg}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="pb-12">
                {!activities.length && (
                    <>
                        <h1 className="mt-20 font-medium text-center text-xl ">
                            Nothing to show here. Please add your favourite
                            destinations and activities to show up here.
                        </h1>
                    </>
                )}
            </div>
        </div>
    );
}
