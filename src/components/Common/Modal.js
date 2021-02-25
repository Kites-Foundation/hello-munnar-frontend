import React from "react";
import Icon from "../Common/Icon";

const Modal = ({ title, children, onClose }) => {
    return (
        <div className="fixed w-full h-100 inset-0 z-50 overflow-hidden bg-opacity-75 bg-black flex justify-center items-center animated fadeIn faster">
            <div className="relative max-h-screen overflow-auto bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto px-6 py-10">
                <button
                    onClick={onClose}
                    className="position absolute top-5 right-5">
                    <Icon
                        name="close"
                        className="fill-current text-black"
                        color="black"
                        size={5}
                    />
                </button>
                {title && <h2 className="text-2xl font-semibold">{title}</h2>}
                <div className="pt-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
