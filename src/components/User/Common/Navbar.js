import React from "react";
import Icon from "../../Common/Icon";

const Navbar = () => {
    return (
        <div className="Navbar flex justify-between content-center pt-4 pb-4 pl-3 pr-3">
            <div className="flex content-center">
                <Icon name="user" className="text-gray-600" />
                <h1 className="ml-1 text-2xl font-bold text-gray-600">
                    John Doe
                </h1>
            </div>
            <div className="flex">
                <Icon name="editUser" className="text-gray-600" />
            </div>
        </div>
    );
};

export default Navbar;
