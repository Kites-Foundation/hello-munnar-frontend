import React from "react";

import searchIcon from './assets/img/search.svg'
import busIcon from './assets/img/bus.svg'
import bellIcon from './assets/img/bell.svg'
import RouteBanner from './RouteBanner'



let Home = () => {
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
            <div 
                className="flex overflow-x-auto pb-3"
            >
                <RouteBanner RouteName="Munnar - Marayur - Kanthallur" RouteColor="violet"/>
                <RouteBanner RouteName="Munnar - Marayur - Kanthallur" RouteColor="indigo"/>
                <RouteBanner RouteName="Munnar - Marayur - Kanthallur" RouteColor="blue"/>
                <RouteBanner RouteName="Munnar - Marayur - Kanthallur" RouteColor="green"/>
                <RouteBanner RouteName="Munnar - Marayur - Kanthallur" RouteColor="yellow"/>
                <RouteBanner RouteName="Munnar - Marayur - Kanthallur" RouteColor="orange"/>
                <RouteBanner RouteName="Munnar - Marayur - Kanthallur" RouteColor="red"/>
            </div>
        </div>
    )
}

export default Home;