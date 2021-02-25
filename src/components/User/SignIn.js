import React from "react";
import Navbar from "./Common/Navbar";
import Switchcomp from "./Common/Switchcomp/Switchcomp";
import Input from "./Common/Input";
import { navigate } from "hookrouter";
import GoogleLogin from "react-google-login";

//for testing  . Need to be put in .env file
const config = { cliendId: process.env.REACT_APP_GOOGLE_CLIENT_ID };
const SignIn = () => {
    const responseGoogle = (response) => {
        console.log(response.profileObj);
        localStorage.setItem("userName", response.profileObj.name);
        navigate("/profile");
    };
    return (
        <div>
            <Navbar name="John Doe" />
            <div className="flex items-center justify-end w-full h-3 pr-4">
                <h1 className="mr-3">Dark Mode</h1>
                <Switchcomp />
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="w-10/12 flex items-center justify-center ">
                    <Input placeholder="Rate Our App" icon="star" />
                </div>
                <div className="w-10/12 flex items-center justify-center ">
                    <Input placeholder="Send Feedback" icon="chat" />
                </div>
                <div className="w-10/12 flex items-center justify-center ">
                    <Input placeholder="Privacy and legal" icon="lock" />
                </div>
                <div
                    className="w-10/12 flex items-center justify-center "
                    onClick={() => navigate("/signOut")}>
                    <Input placeholder="Sign In or Sign Up" icon="addUser" />
                </div>
                <div>
                    <GoogleLogin
                        className="bg-inherit border-blue-300"
                        clientId={config.cliendId}
                        buttonText="Sign In"
                        onSuccess={responseGoogle}
                        onFailure={() => alert("Error")}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
