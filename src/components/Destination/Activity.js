import React from "react";
import DefaultImg from "../../assets/images/activity-test.jpg";

export default function Activity() {
    return (
        <div className="center max-w-6xl mx-auto">
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 md:grid-cols-3 md:max-w-none sm:mx-8">
                <div className="overflow-hidden rounded-lg shadow-lg bg-transparent">

                    <a href="#">
                        <img alt="" className="block h-auto w-full bg-gradient-to-b from black-100" src={DefaultImg} />
                    </a>
                    <div className="flex items-center justify-between p-2 md:p-4 -mt-10 bg-transparent">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-white font-bold" href="#">
                                Activity Name
                        </a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
