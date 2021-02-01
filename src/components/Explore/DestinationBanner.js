import React from "react";
import { A } from "hookrouter";

let DestinationBanner = (props) => {
    return (
        <div className="mt-4">
            <A href={`/destination/${props.destinationId}`}>
                <div className="flex-shrink-0 w-52 h-40 mr-2 bg-green-500 overflow-hidden relative">
                    <img className="w-full z-0" src={props.assetUrl} alt="" />
                    <p className="absolute bottom-0 left-0 text-white z-20 pb-3 pl-2 text-l font-medium">
                        {props.DestinationName}
                    </p>
                    <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full z-10"></div>
                </div>
            </A>
        </div>
    );
};

export default DestinationBanner;
