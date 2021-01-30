import React from "react";
import profilePic from "../../assets/images/profilePic.png";
export default function Reviews() {
    return (
        <div>
            <div className="text-xl font-semibold m-4">Rate and Review</div>
            <div className="flex mx-4">
                <img
                    className="rounded-full  h-8 w-8 my-1"
                    src={profilePic}
                    alt=""
                />
                <div className="text-sm my-auto ml-1 font-semibold">
                    John Doe
                </div>
            </div>
            <div className="mx-4 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </div>
        </div>
    );
}
