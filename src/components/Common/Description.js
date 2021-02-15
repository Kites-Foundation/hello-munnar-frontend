import React, { useState } from "react";
import TruncatedText from "../Common/TruncatedText";
import FlauraFaunaModal from "./FlauraFaunaModal";

export default function Description({ description, flaura, challanges }) {
    const [flauraFauna, setFlauraFauna] = useState(false);

    const onClose = () => setFlauraFauna(false);

    return (
        <div className="">
            <TruncatedText
                content={description}
                maxLength={200}
                className="leading-relaxed py-6 md:py-10"
            />
            <div className="flex flex-wrap">
                {challanges &&
                    challanges.map((challange) => (
                        <div
                            key={challange.challengeId}
                            className="rounded-full mr-3 text-sm font-semibold bg-gray-300 py-0.5 px-3 my-1 capitalize">
                            {challange.challangeName}
                        </div>
                    ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 py-10">
                {flaura &&
                    flaura.map((item) => (
                        <div
                            onClick={() => setFlauraFauna(item)}
                            className="w-full overflow-hidden bg-white rounded-lg shadow-md cursor-pointer"
                            key={item.ffId}>
                            <div className="relative w-full">
                                <img
                                    className="pb-9/16 w-full h-full bg-gray-200"
                                    src={item.ffImage}
                                    alt={item.ffName}
                                />
                            </div>
                            <span className="block px-5 font-semibold pt-3 pb-6">
                                {item.ffName}
                            </span>
                        </div>
                    ))}
            </div>
            {flauraFauna && (
                <FlauraFaunaModal data={flauraFauna} onClose={onClose} />
            )}
        </div>
    );
}
