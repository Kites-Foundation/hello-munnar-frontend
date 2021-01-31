import React from "react";

let RouteBanner = (props) => {
    return (
        <div>
            <div className="flex-shrink-0 w-72 h-40 mr-2 bg-green-500 overflow-hidden relative">
                <img
                    className="w-full z-0"
                    src="https://picsum.photos/400/300"
                    alt=""
                />
                <p className="absolute bottom-0 left-0 text-white z-20 pb-3 pl-2 text-xl font-bold">
                    {props.RouteName}
                </p>
                <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full z-10"></div>
                <div className="flex items-center absolute top-0 right-0 text-white z-20 pt-3 pr-3">
                    <p className="font-semibold">Route -</p>
                    <div
                        style={{
                            backgroundColor: `${props.RouteColor}`,
                        }}
                        className="w-6 h-6 ml-2 rounded-sm border-white border-2 shadow-inner"></div>
                </div>
            </div>
        </div>
    );
};

export default RouteBanner;
