import React from "react";
import DestinationCard from "./DestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DestinationContainer({ destinations, className = "" }) {
    return (
        <section className={className}>
            <h2 className="px-8 md:px-10 font-semibold text-black text-xl">
                Destinations
            </h2>

            <Swiper
                spaceBetween={10}
                slidesPerView="auto"
                className="py-6 md:py-12 pl-8 md:pl-10">
                {destinations.map((destination, id) => (
                    <SwiperSlide key={id} style={{ width: "unset" }}>
                        <DestinationCard data={destination} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
