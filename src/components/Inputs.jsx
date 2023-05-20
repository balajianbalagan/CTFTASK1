import React, {useState} from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  const [city, setCity] = useState("");
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    
  };

  return (
    <div className='flex flex-row items-center justify-around py-6 px-4 '>
        <div className='flex flex-col items-center md:space-x-4 justify-around w-screen'>
          <div className='flex flex-row items-center justify-around space-x-5 bg-white rounded-xl m-1 p-0 sm:pd-3 w-3/4 md:w-full'>
            <input onChange={handleChange} type='text' className='w-1/2 flex-1 md:text-xl font-light py-3 px-3 md:px-5 md:w-max focus:outline-none first-letter:capitalize rounded-xl' placeholder='Search city..'></input>
            <UilSearch onClick={handleSubmit} size={25} className='md:p-0.5 text-black cursor-pointer transition ease-out hover:scale-125 md:text-2xl'/>
            <UilLocationPoint size={25} className='md:p-0.5 text-black cursor-pointer transition ease-out hover:scale-125 md:text-2xl'/>
            </div>
            
          
        </div>
    </div>
  )
}

export default Inputs