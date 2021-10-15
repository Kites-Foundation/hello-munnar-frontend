import React from "react";
import CarousalCard from "./CarousalCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousal({ destinations, title, className = "" }) {
    return (
        <section className={className}>
            <h2 className="px-8 md:px-10 font-semibold text-black text-xl">
                {title}
            </h2>

            <Swiper
                spaceBetween={10}
                slidesPerView="auto"
                className="py-6 md:py-12 pl-8 md:pl-10">
                {destinations.map((destination, id) => (
                    <SwiperSlide key={id} style={{ width: "unset" }}>
                        <CarousalCard data={destination} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
