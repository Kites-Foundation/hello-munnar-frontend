import React, { useEffect } from "react";
import Banner from "../Common/PlacesBanner";
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
        bookingLink: activity.bookinglink,
    };

    const onLike = (status) => {
        // save to local storage
    };

    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto bg-white">
                <Banner
                    route={activity.route}
                    image={activity.bannerImg}
                    onLike={onLike}
                />
                <Heading place={activity} className="pt-2 px-8 md:px-10" />

                <PlacesTab place={activity} className="px-8 md:px-10" />
            </div>
        </div>
    );
}
