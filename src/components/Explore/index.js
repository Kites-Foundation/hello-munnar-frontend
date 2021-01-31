import React, { useState } from "react";

import searchIcon from './assets/img/search.svg'
import busIcon from './assets/img/bus.svg'
import bellIcon from './assets/img/bell.svg'

import RouteBanner from './RouteBanner'
import DestinationBanner from './DestinationBanner'

import data from './assets/data/data.json'


let Explore = () => {
    console.log(data);
    let [selectedRoute,setSelectedRoute] = useState("voilet")
    setSelectedRoute("voilet")
    return (
        <div className="mx-4">
            <div className="flex justify-between my-10">
                <h1 className="text-4xl font-black">Explore</h1>
                <div className="flex">
                    <img className="mx-2 w-6" src={searchIcon} alt=""/>
                    <img className="mx-2 w-6" src={busIcon} alt=""/>
                    <img className="mx-2 w-6" src={bellIcon} alt=""/>
                </div>
            </div>
            <div className="flex overflow-x-auto pb-3">   
                {
                    data.map((route,id)=>{
                        return <RouteBanner 
                                    key={id}
                                    RouteName={route.routeName}
                                    RouteColor={route.routeColor}
                                    isSelected={selectedRoute === route.routeColor}
                                />
                    })
                }
                
            </div>
            <h1 className="mt-4 text-3xl font-black">Destination</h1>
            <div className='flex overflow-x-auto'>
                <DestinationBanner DestinationName="Meeshapulimala"/>
                <DestinationBanner DestinationName="Rajamala"/>
                <DestinationBanner DestinationName="Anamudi"/>
                <DestinationBanner DestinationName="Vagamon"/>
            </div>
            <h1 className="mt-4 text-3xl font-black">Activities</h1>
            <div className='flex overflow-x-auto'>
                <DestinationBanner DestinationName="Meeshapulimala"/>
                <DestinationBanner DestinationName="Rajamala"/>
                <DestinationBanner DestinationName="Anamudi"/>
                <DestinationBanner DestinationName="Vagamon"/>
            </div>
        </div>
    )
}

export default Explore;