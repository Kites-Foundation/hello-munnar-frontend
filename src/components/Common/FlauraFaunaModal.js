import React from "react";
import Icon from "./Icon";
import Modal from "./Modal";

const FlauraFaunaModal = ({ data, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <div className="relative w-full mb-12">
                <img
                    src={data.ffImage}
                    alt=""
                    className="rounded-md h-64 w-full"
                />
            </div>
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">{data.ffName}</h3>
                    <span className="italic mt-1">{data.ffScientificName}</span>
                </div>
                <div className="px-3 py-1 bg-teal-800 text-white rounded text-center text-sm font-medium">
                    {data.ffRiskLevel}
                </div>
            </div>
            <p className="py-8">{data.ffDescription}</p>
            <div className="flex w-full justify-center">
                <a
                    className="px-5 rounded-full py-3 bg-black text-white flex items-center justify-centers"
                    href={data.ffWikiLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Icon
                        name="wikipedia"
                        color="white"
                        className="text-white mr-2"
                        size={6}
                    />
                    <span>Read More</span>
                </a>
            </div>
        </Modal>
    );
};

export default FlauraFaunaModal;
