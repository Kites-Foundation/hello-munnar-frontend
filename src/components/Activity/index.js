import React, { useCallback, useContext, useEffect, useState } from "react";
import ActivityBanner from "../Common/ActivityBanner";
import Heading from "../Common/Heading";
import PlacesTab from "../Common/PlacesTab";
import NotFound from "../Common/NotFound";
import { ApiContext } from "../../ApiContext";

export default function Activity({ slug }) {
    // get all the details of a activity
    // const activityFull = getActivity(slug, true);
    let api = useContext(ApiContext);
    let [isLoading, setIsLoading] = useState(true);
    let [hasError, setHasError] = useState(null);
    let [activityData, setActivityData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let getActivityBySlug = useCallback(async () => {
        setIsLoading(true);
        await api.get(`/things-to-dos?slug=${slug}`)
            .then((response) => {
                let { status, data } = response;
                if (status === 200) {
                    console.log(data);
                    // name,
                    // openingTime,
                    // closingTime,
                    // days,
                    // location,
                    // reviews,
                    // difficulty,
                    // price,
                    // bookingDetails
                    let dataRequired = {}
                    dataRequired.name = data[0].name;
                    dataRequired.openingTime = data[0].openTime;
                    dataRequired.closingTime = data[0].closingTime;
                    dataRequired.days = data[0].days;
                    dataRequired.location = data[0].location;
                    dataRequired.reviews = data[0].reviews;
                    dataRequired.difficulty = data[0].difficultyLevel;
                    dataRequired.price = data[0].price;
                    dataRequired.bookingDetails = { 
                        bookingContactName: data[0].booking.contactName, 
                        bookingContactNumber: data[0].booking.contactNumber, 
                        bookingLink: data[0].booking.url 
                    };
                    setActivityData(dataRequired);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
                setHasError(error)
            });
    }, [api, slug]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getActivityBySlug();
    }, [getActivityBySlug]);
    
    if (!activityData) {
        return <NotFound name="activity" />;
    }

    // const activity = Object.keys(activityFull).reduce((acc, key) => {
    //     let newKey = key.replace("activity", "");
    //     newKey = `${newKey.charAt(0).toLowerCase()}${newKey.slice(1)}`;
    //     return {
    //         ...acc,
    //         [newKey]: activityFull[key],
    //     };
    // }, {});

    // change the coordinate keys for reusing components
    // activity.latitude = activity.coordinateslat;
    // activity.longitude = activity.coordinateslon;
    // activity.bookingDetails = {
    //     bookingContactNumber: activity.bookingContactNumber,
    //     bookingContactName: activity.bookingContactName,
    //     bookingLink: activity.bookingLink,
    // };

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
                {/* <ActivityBanner
                    route={activityData.route}
                    image={activityData.bannerImg}
                    onLike={onLike}
                    activityId={activityData.activitiesId}
                /> */}
                <Heading destinationData={activityData} className="pt-2 px-8 md:px-10" />

                {/* <PlacesTab place={activityData} className="px-8 md:px-10" /> */}
            </div>
        </div>
    );
}
