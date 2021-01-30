import React,{useState} from "react";
import NotificationContainer from './NotificationContainer';
import NewsContainer from './NewsContainer';


function Notification() {
    let [activeTab,setActiveTab] = useState('Alert')
    return <div className="mx-3">
        <div className="mt-10">
            <p className="text-4xl font-bold ">Notification</p><br/>
            <div className="flex justify-center">
                <button 
                    onClick={()=>{setActiveTab('Alert')}}
                    className={`border-2 border-blue-500 font-bold  hover:text-white m-10 w-70  rounded-full text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 w-60 mr-50 ${activeTab ==='Alert' ? ' bg-blue-500 text-white': 'bg-white-500 text-blue-500'}`}>
                Alert
                </button>
                <button 
                    onClick={()=>{setActiveTab('News')
                }}
                    className={`border-2 border-blue-500  hover:text-white m-10 w-70 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 w-60 mr-50 ${activeTab ==='News' ? ' bg-blue-500 text-white': 'bg-white-500 text-blue-500'}`}>
                News
                </button>
            </div>
        </div>
        <div>
             {
                activeTab === 'Alert' ? <NotificationContainer />:''
            }
            {
                activeTab === 'News' ? <NewsContainer/>:''
            }
        </div>
        

    </div>
        
}


export default Notification