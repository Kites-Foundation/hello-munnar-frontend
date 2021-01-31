import React from "react";

export default function Details({id}) {
    return <div className = "my-4 mx-4 px-4">
        <button className="justify-content: flex-start bg-yellow-500 border-red-500 border-2 hover:bg-yellow-400 text-grey px-4 rounded-none ">
        #tag1
        </button> &nbsp;&nbsp;
        <button className="bg-red-400 border-red-500 border-2 hover:bg-red-300 text-grey px-4 rounded-none">
        #tag2
        </button>
        <div className = "text-grey justify-items-center my-5 box-border md:box-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
    </div>
    
}
