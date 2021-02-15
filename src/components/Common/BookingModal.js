import React from "react";
import Icon from "./Icon";
import Modal from "./Modal";

const BookingModal = ({ details, onClose }) => {
    const { bookingLink, bookingContactName, bookingContactNumber } = details;
    const phoneNumbers = bookingContactNumber.split(" ").join("").split("\n");
    return (
        <Modal title="Booking Options" onClose={onClose}>
            <div className="py-2 flex flex-col space-y-5">
                {bookingLink && (
                    <a
                        href={details.bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-black p-6 rounded-lg flex items-center">
                        <Icon
                            name="outsideLink"
                            color="black"
                            stroke={true}
                            className="stroke-current text-black"
                            size={12}
                        />
                        <div className="flex flex-1 flex-col ml-4 justify-center">
                            <div className="text-lg font-semibold mb-1">
                                Book Online
                            </div>
                            <div className="text-sm text-gray-600">
                                {bookingLink}
                            </div>
                        </div>
                    </a>
                )}
                {bookingContactName && bookingContactNumber && (
                    <div className="border border-black p-6 rounded-lg flex items-center">
                        <Icon
                            name="hotelUser"
                            color="black"
                            stroke={false}
                            className="stroke-current text-black"
                            size={12}
                        />
                        <div className="flex flex-1 flex-col ml-4 justify-center">
                            <div className="text-lg font-semibold mb-1">
                                {bookingContactName}
                            </div>
                            <div className="flex space-x-2">
                                {phoneNumbers.map((phoneNumber) => (
                                    <a
                                        href={`tel:${phoneNumber}`}
                                        className="text-sm font-medium underline">
                                        {phoneNumber}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default BookingModal;
