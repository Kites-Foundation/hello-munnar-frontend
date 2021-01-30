import React from "react";
import locationIcon from "./map-pin.svg";
import munnarIcon from "../../../src/assets/images/munnar.png";

export default function Thingstodo() {
    return(
    <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-center min-h-screen">
            <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
                <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                    <p class="font-sans font-bold text-2xl font-quicksand">Things to do</p>
                    <div class="bg-cover bg-center h-56 p-4 relative">
                        <img className="min-w-full min-h-full" src={munnarIcon} >

                        </img>

                       
                    

                        <div class="mr-2 absolute right-5 bottom-5">
                            <button>
                             <img   src={locationIcon}>
                             </img>
                            </button>
                        </div>
                    </div>
                    <div class="mt-3 flex justify-between">
                        <div class="uppercase tracking-wide text-sm font-bold text-gray-700 ml-4 font-quicksand">                           
                            <p> Name</p>
                        </div>
                        <div>    
                            <button class="mr-4 bg-gray-400 hover:bg-gray-700 h-5 w-6 text-sm"> 
                                +
                            </button>

                        </div>                                                    
                    </div>
                    <div class="ml-4 font-quicksand">
                         <p>xyz</p>
                     </div>
                    

                </div>
            </div>
        </div>
    </div>

    );
}



