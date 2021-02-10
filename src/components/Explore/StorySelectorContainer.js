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
                <StorySelector title="B" label="Blue route" color="cyan-600" />
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
                <StorySelector title="R" label="Red route" color="red-500" />
            </div>
        </section>
    );
};

export default StorySelectorContainer;
