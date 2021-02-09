import React, { useState, useEffect } from "react";
import { A } from "hookrouter";
import mainLogo from "./assets/img/main-logo.png";
import Icon from "../Common/Icon";
import data from "./assets/data/data.json";
import StorySelector from "./StorySelector";

let Explore = () => {
    return (
        <div className="">
            <section className="flex justify-between items-center pt-10 pb-2 px-10">
                <div className="w-48 md:w-64">
                    <img src={mainLogo} className="-ml-5" />
                </div>

                <div className="flex">
                    <div className="p-3">
                        <Icon name="search" size={7} color="black" />
                    </div>
                    <div className="p-3">
                        <Icon
                            name="ksrtc"
                            size={7}
                            color="black"
                            stroke={true}
                        />
                    </div>
                </div>
            </section>

            <section className="px-8 md:px-10">
                <h2 className="font-semibold text-black text-xl my-1">
                    Discover Munnar
                </h2>
                <span className="font-normal text-gray-600 text-base">
                    Explore Munnar through these seven routes
                </span>

                <div className="flex justify-evenly py-12">
                    <StorySelector
                        title="V"
                        label="Violet route"
                        color="violet-900"
                    />
                    <StorySelector
                        title="I"
                        label="Indigo route"
                        color="indigo-900"
                    />
                    <StorySelector
                        title="B"
                        label="Blue route"
                        color="cyan-600"
                    />
                    <StorySelector
                        title="G"
                        label="Green route"
                        color="green-500"
                    />
                    <StorySelector
                        title="Y"
                        label="Yellow route"
                        color="yellow-500"
                    />
                    <StorySelector
                        title="O"
                        label="Orange route"
                        color="amber-600"
                    />
                    <StorySelector
                        title="R"
                        label="Red route"
                        color="red-500"
                    />
                </div>
            </section>
        </div>
    );
};

export default Explore;
