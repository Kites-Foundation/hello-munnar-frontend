import React, { useCallback, useContext, useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import StorySelectorContainer from "./StorySelectorContainer";
import DestinationContainer from "../Common/DestinationContainer";
import TodoContainer from "../Common/TodoContainer";
import Carousal from "../Common/Rails/Carousal";

// import destinationDefault from "../../assets/images/destination-default.png";
// import todoDefault1 from "../../assets/images/package-1-default.png";
// import todoDefault2 from "../../assets/images/package-2-default.png";

import {
    getRandomDestinations,
    getRandomActivities,
} from "../../data/dataUtils";
import { ApiContext } from "../../ApiContext";

const Explore = () => {
    let [destinations, setDestinations] = useState([]);
    let [activities, setActivities] = useState([]);
    let [homePageData, setHomePageData] = useState(null);
    let api = useContext(ApiContext);

    let fetchHomePage = useCallback(async () => {
        await api
            .get(`/home-page`)
            .then((response) => {
                // handle success
                console.log(response);
                let { status, data } = response;
                if (status === 200) {
                    console.log(data);
                    setHomePageData(data);
                    // setReviewsCount(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [api]);
    useEffect(() => {
        setDestinations(getRandomDestinations(10));
        setActivities(getRandomActivities(10));
        fetchHomePage();
    }, [fetchHomePage]);
    return (
        <div className="pt-9 ">
            <HeaderNav className="pb-2 px-8 md:px-10" />

            <StorySelectorContainer className="pt-2 px-8 md:px-10" />

            {homePageData?.rails.map((rail) => {
                if (rail.railType === "Carousel") {
                    return (
                        <Carousal
                            title={rail.title}
                            key={rail.order}
                            destinations={rail.destinations}
                            className="py-6 pt-4 md:pt-6"
                        />
                    );
                } else if (rail.railType === "Story") {
                }
            })}

            {/* <DestinationContainer
                destinations={destinations}
                className="py-8 pb-4 md:pd-8"
            />

            <TodoContainer
                activities={activities}
                className="py-6 pt-4 md:pt-6"
            /> */}
        </div>
    );
};

export default Explore;
