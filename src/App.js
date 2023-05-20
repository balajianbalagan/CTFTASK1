import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import fetchData from './services/weatherService';
import React,{ useState, useEffect } from 'react';
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [desc, setDesc] = useState('');
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [humi,setHumi] = useState('');
  const [press,setPress] = useState('');
  const [visi,setVisi] = useState('');
  const [city, setCity] = useState("");
  const [imgi,setImgi] = useState('');
  const handleChange = (event) => {
    const capitalizedCity =
    event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setCity(capitalizedCity);
  };

  const handleSearch = async (event) => {


    try{
      const data = await fetchData(city);
    setWeatherData(data);
     console.log(weatherData);
    
    const description = data.weather[0].description;
    const capitalizedDescription =
    description.charAt(0).toUpperCase() + description.slice(1);
    setDesc(capitalizedDescription);
    setTemp(Math.round(weatherData.main.temp));
    const wind = Math.round(weatherData.wind.speed * 3.6);
    setWind(wind);
    const visibility = weatherData.visibility / 1000;
    setVisi(visibility);
    const humidity = weatherData.main.humidity;
    setHumi(humidity);
    const pressure = weatherData.main.pressure;
    setPress(pressure);
    console.log(data.weather[0].description);
    setImgi(weatherData.weather[0].icon);
    console.log("imgi"+imgi);
    toast.success('Yayy your weather is here!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }catch(e){
      toast.error('City not found!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
      
    }
    // console.log(data);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      handleSearch();
    }
  };
  return (

    <div className="h-screen md:flex items-center justify-center md:mb-4">
        <div className="overflow-hidden md:mx-1 text-center w-screen h-full md:h-3/4 max-w-screen-md md:px-32 md:py-6 md:mt-4 bg-gradient-to-br from-pink-300 to-blue-300 md:rounded-xl shadow-xl shadow-gray-400">
        <div className='m-2 p-2'>
        <div className='flex flex-row items-center justify-around py-6 px-4 '>
        <div className='flex flex-col items-center md:space-x-4 justify-around w-screen'>
          <div className='flex flex-row items-center justify-around space-x-5 bg-white rounded-xl m-1 p-0 sm:pd-3 w-3/4 md:w-full'>
            <input onChange={handleChange} onKeyDown={handleKeyDown} type='text' className='w-1/2 flex-1 md:text-xl font-light py-3 px-3 md:px-5 md:w-max focus:outline-none first-letter:capitalize rounded-xl' placeholder='Search city..'></input>
            <UilSearch onClick={handleSearch} size={25} className='md:p-0.5 text-black cursor-pointer transition ease-out hover:scale-125 md:text-2xl'/>
            <UilLocationPoint size={25} className='md:p-0.5 text-black cursor-pointer transition ease-out hover:scale-125 md:text-2xl'/>
            </div>
            
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
        </div>
    </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around p-2 w-full'>
        <TimeAndLocation loc={city}/>
        <TemperatureDetails weathdesc={desc} temp={temp} wind={wind} press={press} humi={humi} visi={visi} imgi={imgi}/>
        </div>
        
      </div>
</div>
    
  );
}

export default App;
