import React from "react";
import Message from "./message.svg";
import Calendar from "./calendar.svg";
import Star from "./star.png";
import Phone from "./phone.svg";
export default function BookGuide(props) {
    return (

        <div class="p-3">
        <div class="bg-white flex items-center p-2 border-2 border-gray-300 ">
        
            <div class="flex-grow p-2">
                
                <div class="flex justify-between">
                <div class="flex items-center space-x-2">
                <img
                        src="https://joshuaallenshaw.com/wp-content/uploads/2019/04/blank-profile-picture-973460_1280-702x526.png"
                        alt="My profile"
                        class="w-8 h-8 rounded-full"></img>
                    <div class="font-semibold text-gray-700"font-quicksand>{props.name}</div>
                    </div>
                    <div class="flex justify-between m-0">
                    <div class="text-sm text-gray-500 m-1.5 font-quicksand">{props.rate}</div>
                        <img class="m-1.5"
                            style={{
                                width:15,
                                
                                
                            }}
                            src={Star}></img>
                            <div class="text-sm text-gray-500 m-1.5 font-quicksand">{props.trips}</div>
                    </div>
                
        
                </div>
                <br></br>
                <div class="flex items-center space-x-2">
                    <div class="flex items-center">
                        <img
                            style={{
                                width: 15,
                            }}
                            src={Calendar}></img>
                    </div>
                    <div class="text-sm text-gray-500">{props.age}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex items-center">
                        <img
                            style={{
                                width: 15,
                            }}
                            src={Message}></img>
                    </div>
                    <div class="text-sm text-gray-500 font-quicksand">{props.lan}</div>
                </div>
                <br></br>
                <div class="flex justify-between items-center space-x-2 font-quicksand">
                    <div class="font-semibold text-gray-700">INR 1000/trip</div>
                    <div class="flex items-center">
                        <img
                            style={{
                                width: 15,
                            }}
                            src={Phone}></img>
                    </div>
                    </div>    </div>  
          </div>
        </div>
    );
}
