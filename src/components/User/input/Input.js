import React from 'react'

const Input = ({placeholder, label}) => {
    return (
        <div>
            <div class="mb-3 pt-0">
                <label>{label}</label>
                <input type="text" placeholder={placeholder} class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" />
            </div>
        </div>
    )
}

export default Input
