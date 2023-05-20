import React, { useState } from 'react'

function TimeAndLocation(props) {
    const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <div className='flex flex-col justify-start px-3 items-center md:w-fit mb-3'>
        <h1 className='text-white text-xl sm:text-2xl md:text-white md:text-2xl'>{'' + currentDate.toLocaleDateString('en-US', { weekday: 'long' }) + ' ' + currentDate.toLocaleTimeString()}</h1>
        <h1 className='text-white text-xl sm:text-2xl md:text-4xl loctime font-bold'>{props.loc}</h1>
    </div>
  )
}

export default TimeAndLocation