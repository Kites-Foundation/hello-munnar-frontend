import React, { useCallback, useContext, useEffect, useState } from "react";
import ActivityBanner from "../Common/ActivityBanner";
import Heading from "../Common/Heading";
import PlacesTab from "../Common/PlacesTab";
import NotFound from "../Common/NotFound";
import { ApiContext } from "../../ApiContext";
import SomeErrorOccured from "../Common/SomeErrorOccured";

export default function Activity({ slug }) {
    let api = useContext(ApiContext);
    let [isLoading, setIsLoading] = useState(true);
    let [hasError, setHasError] = useState(null);
    let [activityData, setActivityData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let getActivityBySlug = useCallback(async () => {
        setIsLoading(true);
        await api
            .get(`/things-to-dos?slug=${slug}`)
            .then((response) => {
                let { status, data } = response;
                if (status === 200) {
                    let dataRequired = {};
                    dataRequired.id = data[0].id;
                    dataRequired.name = data[0]?.name;
                    dataRequired.openingTime = data[0]?.openTime;
                    dataRequired.closingTime = data[0]?.closingTime;
                    dataRequired.days = data[0]?.days;
                    dataRequired.location = data[0]?.location;
                    dataRequired.reviews = data[0]?.reviews;
                    dataRequired.difficulty = data[0]?.difficultyLevel;
                    dataRequired.price = data[0]?.price;
                    dataRequired.bannerImg = data[0]?.images[0]?.url;
                    dataRequired.bookingDetails = {
                        bookingContactName: data[0]?.booking?.contactName,
                        bookingContactNumber: data[0].booking.contactNumber,
                        bookingLink: data[0].booking.url,
                    };
                    dataRequired.route = {
                        routeColorName: data[0].route.routes[0].colorName,
                    };
                    dataRequired.description = data[0].description;
                    dataRequired.challenges = data[0].challenges;
                    setActivityData(dataRequired);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setHasError(error);
            });
    }, [api, slug]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getActivityBySlug();
    }, [getActivityBySlug]);

    if (!isLoading && !activityData) {
        return <NotFound name="activity" />;
    }

    let onLike = (activityId, isActivityAlreadyFavourite) => {
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
            {isLoading && (
                <h3 className="text-center text-black text-xl mt-12 bg-white">
                    Loading.....
                </h3>
            )}
            {!isLoading && hasError && <SomeErrorOccured />}
            {!isLoading && !hasError && activityData && (
                <div className="max-w-5xl mx-auto bg-white">
                    <ActivityBanner
                        route={activityData?.route}
                        image={activityData?.bannerImg}
                        onLike={onLike}
                        activityId={activityData.id}
                    />
                    <Heading
                        destinationData={activityData}
                        className="pt-2 px-8 md:px-10"
                    />

                    <PlacesTab
                        destinationData={activityData}
                        className="px-8 md:px-10"
                    />
                </div>
            )}
        </div>
    );
}
