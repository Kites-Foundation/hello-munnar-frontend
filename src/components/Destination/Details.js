import React from "react";


export default function Details({id}) {
    return (
        <div className = "my-4 mx-4 px-4">
            <button className="justify-content: flex-start bg-yellow-500 border-red-500 border-2 hover:bg-yellow-400 text-grey px-4 rounded-none ">
                #tag1
            </button> &nbsp;&nbsp;
            <button className="bg-red-400 border-red-500 border-2 hover:bg-red-300 text-grey px-4 rounded-none">
                #tag2
            </button>
            <div className = "text-grey justify-items-center my-5 box-border md:box-content">
                The only legal way to go there is to secure a booking in one of the KFDC munnar properties - Base camp, Glass house, Rhodo valley. Tariff and other details given in KFDC website. Costs about 2k per person approximately whch includes jeep, food and trek permission. Rhodo valley lies closer to Meesapulimala. Its about 2 hrs trek from Rhodo valley to the peak. Base camp is a tented accomodation,ideal for large groups, takes about an hour's trek/some 30 mins jeep drive to rhodo valley. Glass house, lies few meters above base camp offers a nice view of a waterfall, kundala dam and anamudi peak at the far end.

            </div>
        </div>
    );
}
