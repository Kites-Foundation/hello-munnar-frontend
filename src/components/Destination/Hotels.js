import React from "react";
import Image from "../../assets/images/dummy.jpg";
import Star from "../Common/Star";
import Icon from "../Common/Icon";
import { A } from "hookrouter"

export default function Hotels() {
    return (
        <div className="center max-w-6xl mx-auto">
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 md:grid-cols-3 md:max-w-none sm:mx-8">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <A href="#">
                        <img
                            alt="Placeholder"
                            className="block h-auto w-full"
                            src={Image}
                        />
                    </A>
                    <div className="flex items-center justify-between leading-tight p-2 md:p-4 mt-55">
                        <h1 className="text-lg">
                            <A
                                className="no-underline hover:underline text-black"
                                href="#">
                                Name
                            </A>
                        </h1>
                        <Icon name="plus" color={"black"} size={6} />
                    </div>
                    <div className="flex justify-end mt-5">
                        <p className="text-grey-darker text-sm">
                            <span className="flex">
                                <Star num={3} dim={4} />
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row leading-none p-2 md:p-4">
                        <Icon name="carSide" color={"black"} size={6} />

                        <p className="ml-2 text-sm">10 min 2 km</p>
                    </div>
                    <div>
                        <p className="ml-2 text-sm">
                            Neque porro quisquam est qui dolorem ipsum quia
                            dolor sit amet
                        </p>
                    </div>
                    <button className="block mx-auto my-1 uppercase px-4 py-2 rounded-full bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
                        Check Availability
                    </button>
                </div>
            </div>
        </div>
    );
}
