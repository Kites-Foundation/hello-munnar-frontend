import React from 'react'
import Switchcomp from './Switchcomp'
import User from "../assets/add-user.svg"
import Input from '../input/Input'

const SignIn = () => {
    return (
        <div>
            {/* <div className="flex content-center justify-between h-14 w-full bg-gray-50">
                <div className="cont">
                    <svg id="Solid" className="h-10" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m272 384a96 96 0 1 0 96-96 96.108 96.108 0 0 0 -96 96zm40-8h48v-48a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16h-48v48a8 8 0 0 1 -16 0v-48h-48a8 8 0 0 1 0-16z" /><path d="m272.6 442.613a111.947 111.947 0 0 1 71.217-167.976c-31.117-42.497-77.107-66.637-127.817-66.637-45.522 0-87.578 19.485-118.42 54.865-31.063 35.633-48.567 85.3-49.538 140.291 18.365 9.261 93.77 44.844 167.958 44.844a312.1 312.1 0 0 0 56.6-5.387z" /><circle cx="216" cy="112" r="80" /></svg>
                    <h1 className="text-xl">John Doe</h1>
                </div>
                <svg id="Solid" className="h-10" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m272 384a96 96 0 1 0 96-96 96.108 96.108 0 0 0 -96 96zm40-8h48v-48a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16h-48v48a8 8 0 0 1 -16 0v-48h-48a8 8 0 0 1 0-16z" /><path d="m272.6 442.613a111.947 111.947 0 0 1 71.217-167.976c-31.117-42.497-77.107-66.637-127.817-66.637-45.522 0-87.578 19.485-118.42 54.865-31.063 35.633-48.567 85.3-49.538 140.291 18.365 9.261 93.77 44.844 167.958 44.844a312.1 312.1 0 0 0 56.6-5.387z" /><circle cx="216" cy="112" r="80" /></svg>
            </div> */}
            {/* <Switchcomp/> */}
            <Input placeholder="Youe Name" label="Name"  />
            <Input placeholder="You age" label="Age" />
        </div>
    )
}

export default SignIn
