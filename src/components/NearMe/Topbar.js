import React from "react";
import location from "./Vector1.svg"

export default function NearMe() {
    return (
       
        <div className = "p-4 font-quicksand font-bold font-weight=600 text-3xl  ">
            <div className="flex justify-between mt-6">
                <p>Near Me </p>
            </div>
            
             
            <div>
            <div className="flex justify-between mt-6">
            
            <div class="font-thin text-gray-100 ">
                        <img style={{
                            width:30,
                        }} src={location} >
                        </img>
                    </div>
              <p> Meeshapulimala </p>          
            </div>

            </div>
             
            
            <div className= 'flex justify-between mt-6'>
            <div class="-mb-px flex justify-center">
             <a class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                Things to do
             </a>
             <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
             Amenities
             </a>
        
           </div>
          </div>

        </div>

     
        


    );
}