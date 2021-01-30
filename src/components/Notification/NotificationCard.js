import React from "react";
import alerticon from './assets/img/exclamation-mark.png';
import greyicon from './assets/img/alert.svg';


export default function Notification(props) {
    return <div>
      
     <div className="container box-border mx-auto m-10 max-w-sm flex flex-col justify-center items-center">
      <div className={`bg-white box-border w-11/12 flex items-center p-2 rounded-xl  border-4 ${props.isEmergency ? 'border-red-500' :  'border-grey-500'}`}>
       <div className="flex items-center ">
       <img alt="" style={{
           width:50,
          
       }} src={props.isEmergency ? alerticon : greyicon }></img>
      </div>
     <div className="flex-grow p-3">
      <div className="font-semibold text-gray-700">
        {props.heading}
      </div>
      <div className="text-sm text-gray-500">
        {props.content}
      </div>
       </div>
       </div>
       </div>
       
     
    </div>
}