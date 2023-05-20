import React from "react";
import { UilSpinner } from '@iconscout/react-unicons'
function TemperatureDetails(props) {
    console.log("props imgi"+props.imgi); 
  return (
    <div className="flex flex-col items-center md:items-end justify-center w-full tdets">
    <div className="flex flex-col items-center md:items-end justify-evenly w-2/3 ">
      <h3 className="text-white text-2xl">{props.weathdesc}</h3>

      <div className="flex flex-col md:flex-row items-center justify-center w-full md:justify-center px-3 h-1/2">
      
<div>
      {props.imgi=='01d' && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_Stdaec.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='02d' && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_dgjK9i.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='03d' && (<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kljxfos1.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='04d' && (<lottie-player src="https://assets8.lottiefiles.com/temp/lf20_VAmWRg.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='10d'  && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_rpC1Rd.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>


<div>
      {props.imgi=='11d' && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_JA7Fsb.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='13d' && (<lottie-player src="https://assets8.lottiefiles.com/temp/lf20_WtPCZs.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='50d' && (<lottie-player src="https://assets8.lottiefiles.com/temp/lf20_VAmWRg.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='01n' && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_Stdaec.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='02n' && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_dgjK9i.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='03n' && (<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_kljxfos1.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='04n' && (<lottie-player src="https://assets8.lottiefiles.com/temp/lf20_VAmWRg.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='10n'  && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_rpC1Rd.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>


<div>
      {props.imgi=='11n' && (<lottie-player src="https://assets10.lottiefiles.com/temp/lf20_JA7Fsb.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='13n' && (<lottie-player src="https://assets8.lottiefiles.com/temp/lf20_WtPCZs.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>

<div>
      {props.imgi=='50n' && (<lottie-player src="https://assets8.lottiefiles.com/temp/lf20_VAmWRg.json"  background="transparent"  speed="1"  className="w-full h-1/2"  loop autoplay></lottie-player>)}
</div>
  
         <div>
         {!props.imgi && (<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_dw8rzsix.json"  background="transparent"  speed="1" className="w-full h-1/2"  loop  autoplay></lottie-player>)}
         </div>
        <h1 className="text-white text-5xl">{props.temp && (props.temp + '°C')}</h1>
      </div>
      
    </div>

    <div className="flex flex-row items-center md:items-end px-3 w-full relative md:left-28 m-5 md:m-01">
      <div className="text-sm/[17px] text-white flex flex-row items-center md:items-center justify-around px-3  w-full">
        <p>{props.wind && (props.wind+' km/h')}</p>
        
        <p>{props.press && (props.press+' hPa')}</p>
       
        <p>{props.humi && (props.humi+' %')}</p>
       
        <p>{props.visi && (props.visi+' km')}</p>
      </div>
      </div>
</div>

  );
}

export default TemperatureDetails;
