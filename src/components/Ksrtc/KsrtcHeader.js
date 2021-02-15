import React from "react";

function KsrtcHeader() {
    return (
        <div className=" px-4">
            <div className="mt-10 ">
                <div className="flex text-3xl font-bold">
                    <button
                        onClick={() => window.history.go(-1)}
                        className="uppercase flex flex-row pt-2 pl-2 hover:bg-grey-200 transition duration-200 curser-default focus:outline-none justify-center items-center border border-white text-black rounded-full w-15 h-15">
                        <svg
                            className="mx-auto  my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            width="39"
                            height="39"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 28 28"
                            fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <p className="ml-2 PY-0.5">KSRTC Timings</p>
                </div>
            </div>
        </div>
    );
}
export default KsrtcHeader;
