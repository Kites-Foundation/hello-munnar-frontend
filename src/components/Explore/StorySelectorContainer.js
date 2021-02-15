import React from "react";
import StorySelector from "./StorySelector";

const StorySelectorContainer = ({ className = "" }) => {
    return (
        <section className={className}>
            <h2 className="font-semibold text-black text-xl my-1">
                Discover Munnar
            </h2>
            <span className="font-normal text-gray-600 text-base">
                Explore Munnar through these seven routes
            </span>
            <div className={`flex justify-evenly pt-8 pb-3`}>
                <StorySelector title="V" label="violet" color="bg-violet-900" />
                <StorySelector title="I" label="indigo" color="bg-indigo-900" />
                <StorySelector title="B" label="blue" color="bg-cyan-600" />
                <StorySelector title="G" label="green" color="bg-green-500" />
                <StorySelector title="Y" label="yellow" color="bg-yellow-500" />
                <StorySelector title="O" label="orange" color="bg-amber-600" />
                <StorySelector title="R" label="red" color="bg-red-500" />
            </div>
        </section>
    );
};

export default StorySelectorContainer;
