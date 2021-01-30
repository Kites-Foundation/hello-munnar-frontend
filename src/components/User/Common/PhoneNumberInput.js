import React from "react";

const PhoneNumberInput = () => {
    return (
        <div>
            <div className=" border-gray-300">
                <div class="absolute border-b border-gray-600 py-1 inset-x-0 left-0 flex items-center">
                    <label for="currency" class="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                        <option>+91</option>
                        <option>+91</option>
                        <option>+91</option>
                    </select>
                </div>
                <div class="mt-1 absolute rounded-md shadow-sm right-0">
                    <input
                        type="text"
                        name="price"
                        id="price"
                        class="focus:ring-indigo-500 focus:border-indigo-500 block w-11/12 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="9879879879"
                    />
                </div>
            </div>
        </div>
    );
};

export default PhoneNumberInput;
