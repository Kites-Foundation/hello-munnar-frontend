import React, { useEffect, useState } from "react";
import logoHelloMunnar from "../../assets/images/logo-hellomunnar.png";
import logoDistrictAdmin from "../../assets/images/logo-district-admin.png";
import logoDtpc from "../../assets/images/logo-dtpc.png";
import logoKites from "../../assets/images/logo-kites.png";

const SplashScreen = ({ duration }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), duration);
    });

    if (!loading) return null;

    return (
        <div className="fixed top-0 left-0 min-w-full min-h-screen flex flex-col z-40 bg-white">
            <div className="flex-1 flex items-center justify-center px-10">
                <img src={logoHelloMunnar} className="w-full max-w-xl" alt="" />
            </div>
            <div className="pb-16 flex justify-center w-full space-x-2">
                <img src={logoDistrictAdmin} className="h-16 md:h-20" alt="" />
                <img src={logoDtpc} className="h-16 md:h-20" alt="" />
                <img src={logoKites} className="h-16 md:h-20" alt="" />
            </div>
        </div>
    );
};

export default SplashScreen;
