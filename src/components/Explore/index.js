import React, { useState, useEffect } from "react";
import { A } from "hookrouter";

import searchIcon from "./assets/img/search.svg";
import busIcon from "./assets/img/bus.svg";
import bellIcon from "./assets/img/bell.svg";

import RouteBanner from "./RouteBanner";
import DestinationBanner from "./DestinationBanner";

import data from "./assets/data/data.json";

let Explore = () => {
    console.log(data);
    let [selectedRoute, setSelectedRoute] = useState("violet");
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [activitySelectedIndex, setActivitySelectedIndex] = useState(0);

    let findIndexFromData = (color) => {
        return data.findIndex((x) => x.routeColor === color);
    };

    // let findActivityIndexFromData = () =>{

    // }

    useEffect(() => {
        setSelectedRoute("violet");
        setSelectedIndex(findIndexFromData("violet"));
        setActivitySelectedIndex(0);
    }, []);

    return (
        <div className="mx-4">
            <div className="flex justify-between my-10">
                <h1 className="text-4xl font-black">Explore</h1>
                <div className="flex items-center">
                    <A href="#" className="flex items-center">
                        <img className="mx-2 w-6" src={searchIcon} alt="" />
                    </A>
                    <A href="#" className="flex items-center">
                        <img className="mx-2 w-6" src={busIcon} alt="" />
                    </A>
                    <A href="/notifications" className="flex items-center">
                        <img className="mx-2 w-6" src={bellIcon} alt="" />
                    </A>
                </div>
            </div>
            <div className="flex overflow-x-auto pb-3">
                {data.map((route, id) => {
                    let isActive = false;
                    if (route.routeColor === selectedRoute) {
                        isActive = true;
                    }
                    return (
                        <RouteBanner
                            key={id}
                            RouteName={route.routeName}
                            RouteColor={route.routeColor}
                            isSelected={isActive}
                            setSelectedIndex={setSelectedIndex}
                            setSelectedRoute={setSelectedRoute}
                            findIndexFromData={findIndexFromData}
                            assetUrl={route.assetUrl}
                        />
                    );
                })}
            </div>
            <h1 className="mt-4 text-3xl font-black">Destination</h1>
            <div className="flex overflow-x-auto">
                {data[selectedIndex].destinations &&
                    data[selectedIndex].destinations.map((destination, id) => {
                        return (
                            <DestinationBanner
                                key={id}
                                DestinationName={destination.name}
                                assetUrl={destination.assetUrl}
                                destinationId={destination.id}
                            />
                        );
                    })}
                {/* <DestinationBanner DestinationName="Meeshapulimala"/>
                <DestinationBanner DestinationName="Rajamala"/>
                <DestinationBanner DestinationName="Anamudi"/>
                <DestinationBanner DestinationName="Vagamon"/> */}
            </div>
            <h1 className="mt-4 text-3xl font-black">Activities</h1>
            <div className="flex overflow-x-auto">
                {data[selectedIndex].destinations[activitySelectedIndex]
                    .activities.length &&
                    data[selectedIndex].destinations[0].activities.map(
                        (activity, id) => {
                            return (
                                <DestinationBanner
                                    key={id}
                                    DestinationName={activity}
                                />
                            );
                        }
                    )}
            </div>
        </div>
    );
};

export default Explore;
