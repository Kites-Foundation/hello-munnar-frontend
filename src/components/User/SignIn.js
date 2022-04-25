import React, { useContext, useState } from "react";
import Navbar from "./Common/Navbar";
import Switchcomp from "./Common/Switchcomp/Switchcomp";
import Button from "./Common/Button";
import { navigate } from "hookrouter";
import GoogleLogin from "react-google-login";
import { ApiContext } from "../../ApiContext";
import { UserContext } from "../../UserContext";

const config = { clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID };
const SignIn = () => {
    let api = useContext(ApiContext);
    let { user, setUser, logout } = useContext(UserContext);
    let [apiMsg, setApiMsg] = useState(null);
    let [loading, setIsLoading] = useState(null);

    const onAuthFail = () => {
        setIsLoading(false);
        setApiMsg({
            msg: "Login failed, Please try again.",
            isError: true,
        });
    };

    let authBackend = async (accessToken) => {
        return api
            .get(`/auth/google/callback?access_token=${accessToken}`)
            .then((response) => {
                let { status, data } = response;
                if (status === 200) {
                    setIsLoading(false);
                    return data;
                }
            })
            .catch(() => {
                setIsLoading(false);
                onAuthFail();
            });
    };

    const responseGoogle = (response) => {
        let userObj = {
            google: null,
            backend: null,
        };
        userObj.google = response;
        const googleToken = response?.accessToken;
        if (googleToken) {
            authBackend(googleToken).then((res) => {
                userObj.backend = res;
                setUser(userObj);
                localStorage.setItem("user", JSON.stringify(userObj));
                localStorage.setItem("access_token", googleToken);
                localStorage.setItem("jwt_token", res.jwt);
                navigate("/profile");
            });
        }
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
                    {!user ? (
                        <GoogleLogin
                            className="bg-inherit border-blue-300"
                            clientId={config.clientId}
                            buttonText="Sign In"
                            onSuccess={responseGoogle}
                            onFailure={onAuthFail}
                            cookiePolicy={"single_host_origin"}
                            onRequest={() => {
                                setIsLoading(true);
                            }}
                        />
                    ) : (
                        <button
                            className="px-4 py-2 shadow-md hover:shadow-lg transition-shadow  border-2 text-center font-medium"
                            onClick={() => {
                                logout();
                            }}>
                            logout.
                        </button>
                    )}
                    {apiMsg?.msg && (
                        <p
                            className={`text-lg font-medium ${
                                apiMsg.isError ? "text-red-600" : "text-black"
                            }`}>
                            {apiMsg.msg}
                        </p>
                    )}
                    {loading && (
                        <p className={`text-lg font-medium text-black`}>
                            Logging In...
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignIn;
