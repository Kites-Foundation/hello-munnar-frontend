import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationContainer({ destinations, className = "" }) {
    return (
        <section className={className}>
            <h2 className="px-8 md:px-10 font-semibold text-black text-xl">
                Destinations
            </h2>

            <div className="flex overflow-x-auto py-6 md:py-12 px-8 md:px-10">
                {destinations.map((destination) => (
                    <DestinationCard
                        key={destination.name}
                        data={destination}
                    />
                ))}
            </div>
        </section>
    );
}
