import React, { useCallback, useContext, useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import StorySelectorContainer from "./StorySelectorContainer";
import Carousal from "../Common/Rails/Carousal";
import { ApiContext } from "../../ApiContext";
import StoryContainer from "../Common/Rails/Story";

const Explore = () => {
    let [homePageData, setHomePageData] = useState(null);
    let api = useContext(ApiContext);

    let fetchHomePage = useCallback(async () => {
        await api
            .get(`/home-page`)
            .then((response) => {
                let { status, data } = response;
                if (status === 200) {
                    setHomePageData(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [api]);
    useEffect(() => {
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
                            key={rail.order}
                            title={rail.title}
                            destinations={rail.destinations}
                            className="py-6 pt-4 md:pt-6"
                        />
                    );
                } else if (rail.railType === "Story") {
                    return (
                        <StoryContainer
                            key={rail.order}
                            title={rail.title}
                            activities={rail.thingsToDo}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default Explore;
