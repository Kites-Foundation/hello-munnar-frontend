import React from "react";
import Image from "../../assets/images/dummy.jpg"
import Star from "../Common/Star";

export default function Hotels() {
    return (
        <div className="center max-w-6xl mx-auto">
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 md:grid-cols-3 md:max-w-none sm:mx-8">
                <div className="overflow-hidden rounded-lg shadow-lg">

                    <a href="#">
                        <img alt="Placeholder" className="block h-auto w-full" src={Image} />
                    </a>
                    <div className="flex items-center justify-between leading-tight p-2 md:p-4 mt-55">
                        <h1 className="text-lg">
                            <a className="no-underline hover:underline text-black" href="#">
                                Name
                        </a>
                        </h1>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="plus-square"
                            width="24"
                            height="24"
                            class="svg-inline--fa fa-plus-square fa-w-14"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path
                                fill="currentColor"
                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-end mt-5">
                        <p className="text-grey-darker text-sm">
                            <span className="flex">
                                <Star
                                    num={3}
                                    dim={4}
                                />
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row leading-none p-2 md:p-4">

                        <svg aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="car-side"
                            width="24"
                            height="24"
                            class="svg-inline--fa fa-car-side fa-w-20"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512">
                            <path fill="currentColor" d="M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"></path></svg>

                        <p className="ml-2 text-sm">
                            10 min 2 km
                        </p>
                    </div>
                    <div>
                        <p className="ml-2 text-sm">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                    </div>
                    <button className="block mx-auto my-1 uppercase px-4 py-2 rounded-full bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Check Availability</button>
                </div>
            </div>
        </div>
    );
}