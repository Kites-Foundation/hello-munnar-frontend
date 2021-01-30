import React from "react";
import newsicon from './assets/img/news.png';



export default function News(props) {
    return <div>
      
     <div className="container mx-auto m-10 max-w-sm flex flex-col justify-center items-center">
      <div className="bg-white w-full flex items-center p-2 rounded-xl  border-4">
       <div className="flex items-center ">
       <img style={{
           width:50,
          
       }} src={newsicon}></img>
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