import React, { useEffect, useState } from "react";
import ActivityBanner from "../Common/ActivityBanner";
import Heading from "../Common/Heading";
import PlacesTab from "../Common/PlacesTab";
import { getActivity } from "../../data/dataUtils";
import NotFound from "../Common/NotFound";

export default function Activity({ id }) {
    // get all the details of a activity
    const activityFull = getActivity(id, true);
    const [liked, setLiked] = useState(true);

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
        bookingLink: activity.bookinglink,
    };

    let isActivitynAlreadyFavourite = (destinationId) => {
        let currentAcivityFavourites = JSON.parse(
            localStorage.getItem("hello-munnar-activities-favourites")
        );
        if (
            currentAcivityFavourites &&
            currentAcivityFavourites.includes(destinationId)
        ) {
            setLiked(true);
            return true;
        } else {
            setLiked(false);
            return false;
        }
    };

    const onLike = (activityId, isDestinationAlreadyFavourite) => {
        // save to local storage
        console.log(isDestinationAlreadyFavourite(activityId));
        let currentDestinationFavourites = JSON.parse(
            localStorage.getItem("hello-munnar-activities-favourites")
        );
        if (isDestinationAlreadyFavourite(activityId)) {
            currentDestinationFavourites.splice(
                currentDestinationFavourites.indexOf(activityId),
                1
            );
            localStorage.setItem(
                "hello-munnar-activites-favourites",
                JSON.stringify(currentDestinationFavourites)
            );
        } else if (
            currentDestinationFavourites &&
            !currentDestinationFavourites.includes(activityId)
        ) {
            localStorage.setItem(
                "hello-munnar-activites-favourites",
                JSON.stringify([activityId, ...currentDestinationFavourites])
            );
        } else if (!currentDestinationFavourites && activityId) {
            localStorage.setItem(
                "hello-munnar-activites-favourites",
                JSON.stringify([activityId])
            );
        }
        isActivitynAlreadyFavourite(activityId);
    };

    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto bg-white">
                <ActivityBanner
                    route={activity.route}
                    image={activity.bannerImg}
                    onLike={() => {
                        onLike(id, isActivitynAlreadyFavourite);
                    }}
                />
                <Heading place={activity} className="pt-2 px-8 md:px-10" />

                <PlacesTab place={activity} className="px-8 md:px-10" />
            </div>
        </div>
    );
}
