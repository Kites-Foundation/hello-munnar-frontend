import React from "react";
import TodoCard from "./TodoCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TodoContainer({ activities, className = "" }) {
    return (
        <section className={className}>
            {activities?.length > 0 && (
                <>
                    <h2 className="px-8 md:px-10 font-semibold text-black text-xl">
                        Things To Do
                    </h2>
                    <div className="py-6 md:py-12 pl-8 md:pl-10">
                        <Swiper spaceBetween={10} slidesPerView="auto">
                            {activities.map((activity, id) => (
                                <SwiperSlide
                                    key={id}
                                    style={{ width: "unset" }}>
                                    <TodoCard data={activity} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </>
            )}
        </section>
    );
}
