import React, { useEffect } from "react";
import ActivityBanner from "../Common/ActivityBanner";
import Heading from "../Common/Heading";
import PlacesTab from "../Common/PlacesTab";
import { getActivity } from "../../data/dataUtils";
import NotFound from "../Common/NotFound";

export default function Activity({ id }) {
    // get all the details of a activity
    const activityFull = getActivity(id, true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!activityFull) {
        return <NotFound name="activity" />;
    }

    const activity = Object.keys(activityFull).reduce((acc, key) => {
        let newKey = key.replace("activity", "");
        newKey = `${newKey.charAt(0).toLowerCase()}${newKey.slice(1)}`;
        return {
            ...acc,
            [newKey]: activityFull[key],
        };
    }, {});

    // change the coordinate keys for reusing components
    activity.latitude = activity.coordinateslat;
    activity.longitude = activity.coordinateslon;
    activity.bookingDetails = {
        bookingContactNumber: activity.bookingContactNumber,
        bookingContactName: activity.bookingContactName,
        bookingLink: activity.bookingLink,
    };

    let onLike = (status, activityId, isActivityAlreadyFavourite) => {
        let currentActivityFavourites = JSON.parse(
            localStorage.getItem("hello-things-to-do-favourites")
        );
        if (isActivityAlreadyFavourite(activityId)) {
            currentActivityFavourites.splice(
                currentActivityFavourites.indexOf(activityId),
                1
            );
            localStorage.setItem(
                "hello-things-to-do-favourites",
                JSON.stringify(currentActivityFavourites)
            );
        } else if (
            currentActivityFavourites &&
            !currentActivityFavourites.includes(activityId)
        ) {
            localStorage.setItem(
                "hello-things-to-do-favourites",
                JSON.stringify([activityId, ...currentActivityFavourites])
            );
        } else if (!currentActivityFavourites && activityId) {
            localStorage.setItem(
                "hello-things-to-do-favourites",
                JSON.stringify([activityId])
            );
        }
        isActivityAlreadyFavourite(activityId);
    };

    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto bg-white">
                <ActivityBanner
                    route={activity.route}
                    image={activity.bannerImg}
                    onLike={onLike}
                    activityId={activity.activitiesId}
                />
                <Heading place={activity} className="pt-2 px-8 md:px-10" />

                <PlacesTab place={activity} className="px-8 md:px-10" />
            </div>
        </div>
    );
}
