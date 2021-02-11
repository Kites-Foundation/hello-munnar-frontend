import React from "react";
import location from "../NearMe/icons/map-pin.svg";
import loc2 from "./Vector.svg";
import nearmeicon from "./Vector (2).svg" ;


const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-medium px-5 py-3 " +
                  (openTab === 1
                    ? "text-gray-800 border-b-2 border-black"
                    : "text-" + color + "-600 focus:outline-none text-gray-800  font-medium ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Things to do
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-medium  px-5 py-3  " +
                  (openTab === 2
                    ? "text-gray-800 bg-white-600 border-b-2 border-black"
                    : "text-" + color + "-600 bg-white focus:outline-none text-gray-800  font-medium ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Amenities
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                
                <div className=" flex flex-wrap ">
                    <div className="flex  justify-center mt-1">                        
                        <button                                           
                        className=" border-2 border-gray-600 bg-white-600 rounded-lg my-auto text-center text-xs font-medium text-black-500 px-4 py-1 hover:bg-gray-200 hover:text-black mr-2">
                        Hospitals
                        </button>
                        <button                       
                        className="border-2 border-gray-600 bg-white-600 rounded-lg my-auto text-center text-xs font-medium text-black-500 px-2 py-1  hover:bg-gray-200 hover:text-black mr-2">
                        Food & Drinks
                        </button>
                        <button                        
                        className="border-2 border-gray-600 bg-white-600 rounded-lg my-auto text-center text-xs font-medium text-black-500 px-2 py-1 hover:bg-gray-200 hover:text-black mr-2">
                        Waste bins
                        </button>
                    </div>
                </div>

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    
    <div className = "p-4 font-poppins font-weight=600  ">
            <div className="flex justify-between mt-6 font-semibold text-3xl">
               <div className="flex mt-6">
                 <img src={nearmeicon}  >               
                 </img>
               <div class="pl-2 ml-2 text-2xl ">Near me </div>

               </div>
               
                
            </div>
            
             
            <div>
            <div className="flex mt-6 w-4 ">
            
              <img src={location}>
              </img>
                    
            <div class="pl-2 text-1xl font-medium">Meeshapullimala</div>         
            </div>

            </div>
              <>
      <Tabs color="black" />
    </>
    </div>
  );
}