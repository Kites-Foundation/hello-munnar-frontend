import React, { useState } from "react";
import TruncatedText from "../Common/TruncatedText";
import FlauraFaunaModal from "./FlauraFaunaModal";

export default function Description({
    description,
    floraAndFaunas,
    challanges,
}) {
    const [flauraFaunaMoadalData, setFlauraFaunaMoadalData] = useState(false);

    const onClose = () => setFlauraFaunaMoadalData(false);

    return (
        <div className="">
            <TruncatedText
                content={description}
                maxLength={200}
                className="leading-relaxed py-6 md:py-10"
            />
            <div className="flex flex-wrap">
                {challanges &&
                    challanges.map((challange, id) => (
                        <div
                            key={id}
                            className="rounded-full mr-3 text-sm font-semibold bg-gray-300 py-0.5 px-3 my-1 capitalize">
                            {challange.name}
                        </div>
                    ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 py-10">
                {floraAndFaunas &&
                    floraAndFaunas.map((item) => (
                        <div
                            onClick={() => setFlauraFaunaMoadalData(item)}
                            className="w-full overflow-hidden bg-white rounded-lg shadow-md cursor-pointer"
                            key={item.id}>
                            <div className="relative w-full pb-9/16">
                                <img
                                    className="absolute w-full h-full bg-gray-200"
                                    src={
                                        item.images[0].formats["thumbnail"].url
                                    }
                                    alt={item.name}
                                />
                            </div>
                            <span className="block px-5 font-semibold pt-3 pb-6">
                                {item.name}
                            </span>
                        </div>
                    ))}
            </div>
            {flauraFaunaMoadalData && (
                <FlauraFaunaModal
                    data={flauraFaunaMoadalData}
                    onClose={onClose}
                />
            )}
        </div>
    );
}
