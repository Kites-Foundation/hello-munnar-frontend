import React from "react";
import Navbar from "./Common/Navbar";
import Switchcomp from "./Common/Switchcomp/Switchcomp";
import Button from "./Common/Button";
import { navigate } from "hookrouter";

const SignOut = () => {
    return (
        <div className="user">
            <Navbar name="John Doe" />
            <div className="flex items-center justify-end w-full h-3 pr-4">
                <h1 className="mr-3">Dark Mode</h1>
                <Switchcomp />
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="w-10/12 flex items-center justify-center ">
                    <Button text="Rate Our App" icon="star" />
                </div>
                <div className="w-10/12 flex items-center justify-center ">
                    <Button text="Send Feedback" icon="chat" />
                </div>
                <div className="w-10/12 flex items-center justify-center ">
                    <Button text="Privacy and legal" icon="lock" />
                </div>
                <div
                    className="w-10/12 flex items-center justify-center"
                    onClick={() => navigate("/explore")}>
                    <Button text="Logout" icon="logout" />
                </div>
            </div>
        </div>
    );
};

export default SignOut;
