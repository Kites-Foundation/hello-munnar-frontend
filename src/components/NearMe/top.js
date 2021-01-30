import React from "react";
import searchIcon from "./search.svg"
import bellIcon from "./bell.svg"

export default function NearMe() {
    return (
        <div className = "p-4 font-quicksand font-bold font-weight=600 text-3xl  ">
            <div className="flex justify-between mt-6">
                <p> Near Me </p>
                <div className="flex space-x-4">
                    <div class="font-thin text-gray-100 ">
                        <button><img style={{
                            width:30,
                        }} src={searchIcon} >
                        </img></button>
                    </div>
                    <div class="font-thin text-gray-100">
                       
                       <button>
                       <img style={{
                            width:30,
                        }} src={bellIcon} >
                        </img>
                           </button> 
                    </div>
                </div>
            </div>
        

        <div class="mt-5 p-2 flex flex-wrap justify-center">
        <div class="flex whitespace-nowrap justify-center mt-4">
            <a href="" class="ml-6 border-2 border-green-500 rounded-full font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-6 text-base">
            Things to do
             </a>
             <a href="" class="border-2 border-green-500 rounded-full font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-6 text-base">
            Food & Drink
             </a>
             <a href="" class="border-2 border-green-500 rounded-full font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-6 text-base">
            Stay
             </a>
           

        </div>
        <div class="mt-3 flex justify-center">
            <a href="" class="border-2 border-green-500 rounded-full font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-6 text-base">
            Information Desk
             </a>
             <a href="" class="border-2 border-green-500 rounded-full font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-6 text-base">
            Book Guide
             </a>
             
        </div>

        <div class="mt-3 flex justify-center">
            <a href="" class="border-2 border-green-500 rounded-full font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-6 text-base">
            Wastebins
             </a>
             <a href="" class="border-2 border-green-500 rounded-full font-bold text-green-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white mr-6 text-base">
            Restrooms
             </a>
             
        </div>
        </div>
    </div>   
    );
}
