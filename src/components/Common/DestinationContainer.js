import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationContainer({ destinations, className = "" }) {
    return (
        <section className={className}>
            <h2 className="mx-8 md:mx-10 font-semibold text-black text-xl">
                Destinations
            </h2>

            <div className="flex overflow-x-auto py-6 md:py-12 mx-8 md:mx-10">
                {destinations.map((destination, id) => (
                    <DestinationCard key={id} data={destination} />
                ))}
            </div>
        </section>
    );
}
