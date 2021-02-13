import React from "react";
import Icon from "./Icon";
import Modal from "./Modal";

const BookingModal = ({ details, onClose }) => {
    const { bookingLink, bookingContact } = details;
    return (
        <Modal title="Booking Options" onClose={onClose}>
            <div className="py-2 flex flex-col space-y-5">
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
                    <div className="flex flex-col ml-4 justify-center">
                        <div className="text-lg font-semibold mb-1">
                            Book Online
                        </div>
                        <div className="text-sm text-gray-600">
                            {bookingLink}
                        </div>
                    </div>
                </a>
                <a
                    href={`tel:${bookingContact.bookingContactNumber}`}
                    className="border border-black p-6 rounded-lg flex items-center">
                    <Icon
                        name="hotelUser"
                        color="black"
                        stroke={true}
                        className="stroke-current text-black"
                        size={12}
                    />
                    <div className="flex flex-col ml-4 justify-center">
                        <div className="text-lg font-semibold mb-1">
                            {bookingContact.bookingContactName}
                        </div>
                        <div className="text-sm font-medium">
                            {bookingContact.bookingContactNumber}
                        </div>
                    </div>
                </a>
            </div>
        </Modal>
    );
};

export default BookingModal;
