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
    return (
        <div className="px-8 md:px-10 mt-8 grid grid-cols-1 gap-6 md1:gap-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((destination, index) => {
                return (
                    <div
                        key={index}
                        className="w-full overflow-hidden bg-white rounded-lg shadow-md cursor-pointer">
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
