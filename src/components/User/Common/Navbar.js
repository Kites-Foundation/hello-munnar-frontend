import React from "react";
import Icon from "../../Common/Icon";

const Navbar = ({ name }) => {
    return (
        <div className="Navbar flex justify-between content-center pt-8 pb-12 pl-8 pr-8">
            <div className="flex content-center">
                <Icon name="userFilled" className="text-gray-900" size="7" />
                <h1 className="ml-4 text-2xl font-bold text-gray-900">
                    {name}
                </h1>
            </div>
            <div className="flex">
                <Icon name="editUser" className="text-gray-900" size="7" />
            </div>
        </div>
    );
};

export default Navbar;
