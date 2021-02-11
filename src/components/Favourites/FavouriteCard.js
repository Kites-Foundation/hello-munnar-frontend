import React from "react";
import Icon from "../Common/Icon";

export default function FavouriteCard(props) {
    return (
<div className="mb-6">
  <div >
      <div
    className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
  >
    <div className="col-span-3 row-span-4">
        <img
          src="https://picsum.photos/640/400/?random"
          alt="Placeholder"
          className="object-cover h-32 w-full"
        />
    </div>


    <div className="col-span-3 row-span-1">
      <header
        className="flex items-center justify-between leading-tight p-2 mx-2"
      >
        <h1 className="text-xl">Anamudi Shola National Park
        </h1>
        <Icon name="love" size={6} />
      </header>
    </div>

    <div className="col-span-3 row-span-1 mb-1">
      <ul className="flex flex-row pl-4 text-gray-600 space-x-4">
      <li className="py-1">
          <div className="flex item-center space-x-1">
          <div className="flex items-center">
          <Icon name="route" size={4} />
          </div>
        <p className="text-l">violet</p>
          </div>
        </li>
        <li className="py-1">
          <div className="flex item-center space-x-1">
          <div className="flex items-center">
          <Icon name="time" size={4} />
          </div>
        <p className="text-l">8:30-5:00</p>
          </div>
        </li>

        <li className="py-1">
          <div className="flex item-center space-x-1">
          <div className="flex items-center">
          <Icon name="date" size={4} />
          </div>
        <p className="text-l">All week</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>

    );
}
