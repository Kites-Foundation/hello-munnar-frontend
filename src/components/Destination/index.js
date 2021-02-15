import React, { useEffect } from "react";
import Banner from "../Common/PlacesBanner";
import Heading from "../Common/Heading";
import PlacesTab from "../Common/PlacesTab";
import ActivitiesContainer from "../Common/ActivitiesContainer";
import { getDestination } from "../../data/dataUtils";
import NotFound from "../Common/NotFound";

export default function Destination({ id }) {
    const destinationFull = getDestination(id, true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!destinationFull) {
        return <NotFound name="destination" />;
    }

    // replace the redundant "destination" in key name of data
    // example:     { destinationId: 1, destinationName: "xxx" }
    //   changes to { id: 1, name: "xxx" }
    let destination = Object.keys(destinationFull).reduce((acc, key) => {
        let newKey = key.replace("destination", "");
        newKey = `${newKey.charAt(0).toLowerCase()}${newKey.slice(1)}`;
        return {
            ...acc,
            [newKey]: destinationFull[key],
        };
    }, {});
    destination.name = destination.routeDestination;

    const onLike = (status) => {
        // save to local storage
    };

    return (
        <div className="w-full bg-gray-200">
            <div className="max-w-5xl mx-auto bg-white">
                <Banner
                    route={destination.route}
                    image={destination.bannerImg}
                    onLike={onLike}
                />
                <Heading place={destination} className="pt-2 px-8 md:px-10" />

                <ActivitiesContainer
                    activities={destination.activityTags}
                    className="px-8 md:px-10 py-4"
                />

                <PlacesTab place={destination} className="px-8 md:px-10" />
            </div>
        </div>
    );
}
