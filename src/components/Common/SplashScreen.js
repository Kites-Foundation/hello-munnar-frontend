import React, { useEffect, useState } from "react";
import logoHelloMunnar from "../../assets/images/logo-hellomunnar.png";
import logoDistrictAdmin from "../../assets/images/logo-district-admin.png";
import logoDtpc from "../../assets/images/logo-dtpc.png";
import logoKites from "../../assets/images/logo-kites.png";

const SplashScreen = ({ duration }) => {
    const [loading, setLoading] = useState(true);

    // state to trigger element hide after animation is done
    const [animationEnded, setAnimationEnded] = useState(false);

    useEffect(() => {
        const hideSplashTimeout = setTimeout(() => {
            setLoading(false);
        }, duration);

        const endAnimationTimeout = setTimeout(
            () => setAnimationEnded(true),
            duration + 500
        ); // hard-coded animation duration

        return () => {
            clearTimeout(hideSplashTimeout);
            clearTimeout(endAnimationTimeout);
        };
    }, [duration]);

    return (
        <div
            className={`top-0 left-0 min-w-full min-h-screen flex flex-col z-40 bg-white transition-opacity duration-500 ease-in-out ${
                loading ? "opactiy-100" : "opacity-0"
            }  ${animationEnded ? "hidden" : "fixed"}`}>
            <div className="flex-1 flex items-center justify-center px-10">
                <img src={logoHelloMunnar} className="w-full max-w-xl" alt="" />
            </div>
            <div className="pb-32 flex justify-center w-full space-x-2">
                <img src={logoDistrictAdmin} className="h-16 md:h-20" alt="" />
                <img src={logoDtpc} className="h-16 md:h-20" alt="" />
                <img src={logoKites} className="h-16 md:h-20" alt="" />
            </div>
        </div>
    );
};

export default SplashScreen;
