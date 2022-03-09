import React, { useCallback, useContext, useEffect, useState } from "react";
import Banner from "../Common/PlacesBanner";
import Heading from "../Common/Heading";
import PlacesTab from "../Common/PlacesTab";
import ActivitiesContainer from "../Common/ActivitiesContainer";
import NotFound from "../Common/NotFound";
import { ApiContext } from "../../ApiContext";
import SomeErrorOccured from "../Common/SomeErrorOccured";

export default function Destination({ slug }) {
    let api = useContext(ApiContext);
    let [destinationData, setDestionationData] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let [hasError, setHasError] = useState(null);
    let [id, setId] = useState(null);
    let [liked, setLiked] = useState(false);

    let getDestinationBySlug = useCallback(async () => {
        setIsLoading(true);
        await api
            .get(`/destinations?slug=${slug}`)
            .then((response) => {
                let { status, data } = response;
                if (status === 200) {
                    console.log(data[0]);
                    setDestionationData(data[0]);
                    setId(data[0].id);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
                setHasError(error);
            });
    }, [api, slug]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getDestinationBySlug();
    }, [getDestinationBySlug]);

    let getCurrentDestinationFavourites = () => {
        return JSON.parse(
            localStorage.getItem("hello-munnar-destination-favourites")
        );
    };

    let isDestinationAlreadyFavourite = useCallback(() => {
        // Get existing favourites from localstorage
        let currentDestinationFavourites = getCurrentDestinationFavourites();
        console.log(currentDestinationFavourites);
        if (
            currentDestinationFavourites &&
            currentDestinationFavourites.includes(id)
        ) {
            setLiked(true);
            return true;
        } else {
            setLiked(false);
            return false;
        }
    }, [id]);

    let onClickLikeButton = () => {
        console.log("cliked");
        let currentDestinationFavourites = getCurrentDestinationFavourites();
        if (currentDestinationFavourites && liked) {
            const index = currentDestinationFavourites.indexOf(id);
            if (index > -1) {
                currentDestinationFavourites.splice(index, 1);
            }
            localStorage.setItem(
                "hello-munnar-destination-favourites",
                JSON.stringify(currentDestinationFavourites)
            );
        } else if (currentDestinationFavourites && !liked) {
            currentDestinationFavourites.push(id);
            localStorage.setItem(
                "hello-munnar-destination-favourites",
                JSON.stringify(currentDestinationFavourites)
            );
        } else if (!currentDestinationFavourites) {
            console.log("here");
            localStorage.setItem(
                "hello-munnar-destination-favourites",
                JSON.stringify([id])
            );
        }
        isDestinationAlreadyFavourite();
    };

    if (!destinationData && !isLoading) {
        return <NotFound name="destination" />;
    }

    return (
        <div className="w-full bg-gray-200">
            {isLoading && (
                <h3 className="text-center text-black text-xl mt-12 bg-white">
                    Loading.....
                </h3>
            )}
            {!isLoading && hasError && <SomeErrorOccured />}
            {!isLoading && !hasError && (
                <div className="max-w-5xl mx-auto bg-white">
                    <Banner
                        route={destinationData.route}
                        image={destinationData.image[0].url}
                        onLike={onClickLikeButton}
                        destinationId={id}
                        hasLiked={liked}
                    />
                    <Heading
                        destinationData={destinationData}
                        className="pt-2 px-8 md:px-10"
                    />

                    <ActivitiesContainer
                        destinationData={destinationData}
                        className="px-8 md:px-10 py-4"
                    />

                    <PlacesTab
                        destinationData={destinationData}
                        className="px-8 md:px-10"
                    />
                </div>
            )}
        </div>
    );
}
