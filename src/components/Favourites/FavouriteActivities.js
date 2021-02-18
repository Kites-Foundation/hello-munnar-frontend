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
        <div className="m-4 ">
            {activities.map((activity, index) => {
                return (
                    <div key={index}>
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
            {!activities.length && (
                <>
                    <h1 className="mt-20 font-medium text-center text-xl ">
                        Nothing to show here. Please add your favourite
                        destinations and activities to show up here.
                    </h1>
                </>
            )}
        </div>
    );
}
