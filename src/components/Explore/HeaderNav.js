import React from "react";
import mainLogo from "../../assets/images/main-logo.png";
import Icon from "../Common/Icon";

const HeaderNav = ({ className }) => {
    return (
        <section className={`flex justify-between items-center ${className}`}>
            <div className="w-48 md:w-64">
                <img
                    src={mainLogo}
                    className="-ml-3.5 md:-ml-5"
                    alt="Hello Munnar"
                />
            </div>

            <div className="flex">
                <div className="p-3">
                    <Icon name="search" size={7} color="black" />
                </div>
                <div className="p-3">
                    <Icon name="ksrtc" size={7} color="black" stroke={true} />
                </div>
            </div>
        </section>
    );
};

export default HeaderNav;
