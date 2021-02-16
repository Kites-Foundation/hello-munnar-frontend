import React, { useState } from "react";
import FavouriteCard from "./FavouriteCard";
import { getManyDestination, getRoute } from "../../data/dataUtils";

export default function FavouriteDestinations() {
    let currentDestinationFavourites = JSON.parse(
        localStorage.getItem("hello-munnar-activites-favourites")
    );
    let [destinations, setDestinations] = useState(
        getManyDestination(currentDestinationFavourites)
    );
    console.log(destinations);
    return (
        <div className="m-4">
            {destinations.map((destination, index) => {
                return (
                    <div key={index}>
                        <FavouriteCard
                            destinationId={destination.destinationId}
                            name={destination.routeDestination || null}
                            route={
                                getRoute(destination.destinationRouteId)
                                    .routeColorName || null
                            }
                            time={
                                destination.openingTime ||
                                destination.closingTime ||
                                null
                            }
                            day={destination.day || null}
                            setDestinations={setDestinations}
                            image={destination.bannerImg}
                        />
                    </div>
                );
            })}
            {!destinations.length && (
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
