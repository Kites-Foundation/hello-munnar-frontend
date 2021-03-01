import React from "react";
import Navbar from "./Common/Navbar";
import Switchcomp from "./Common/Switchcomp/Switchcomp";
import Button from "./Common/Button";
import { navigate } from "hookrouter";
import GoogleLogin from "react-google-login";
import { Logger } from "../../utils/logger";
import { googleLogin } from "../../redux/actions";
import { useDispatch } from "react-redux";

const config = { clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID };
const SignIn = () => {
    const dispatch = useDispatch();
    const responseGoogle = (response) => {
        const googleToken = response.tokenObj.id_token;
        dispatch(googleLogin({ googleToken: googleToken })).then((res) => {
            if (res && res.data) {
                localStorage.setItem("access_token", res.data.access_token);
                navigate("/profile");
            } else {
                Logger("error..! cant login");
            }
        });
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
                    <Button
                        onClick={() => {
                            window.location.href =
                                "https://github.com/Kites-Foundation/hello-munnar-frontend";
                        }}
                        text="Star on GitHub"
                        icon="star"
                    />
                </div>
                <div className="w-10/12 flex items-center justify-center ">
                    <Button
                        onClick={() => {
                            window.location.href =
                                "https://github.com/Kites-Foundation/hello-munnar-frontend/issues/new/choose";
                        }}
                        text="Send Feedback"
                        icon="chat"
                    />
                </div>
                <div className="w-10/12 flex items-center justify-center ">
                    <Button text="Privacy and legal" icon="lock" />
                </div>
                <div>
                    {!localStorage.getItem("access_token") && (
                        <GoogleLogin
                            className="bg-inherit border-blue-300"
                            clientId={config.clientId}
                            buttonText="Sign In"
                            onSuccess={responseGoogle}
                            onFailure={() => Logger("login failed")}
                            cookiePolicy={"single_host_origin"}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignIn;
