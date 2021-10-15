import React from "react";
import StoryCard from "./StoryCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function StoryContainer({ title, activities, className = "" }) {
    return (
        <section className={className}>
            <>
                <h2 className="px-8 md:px-10 font-semibold text-black text-xl">
                    {title}
                </h2>
                <div className="py-6 md:py-12 pl-8 md:pl-10">
                    <Swiper spaceBetween={10} slidesPerView="auto">
                        {activities.map((activity, id) => (
                            <SwiperSlide key={id} style={{ width: "unset" }}>
                                <StoryCard data={activity} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </>
        </section>
    );
}
