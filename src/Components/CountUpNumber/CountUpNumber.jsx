import React, { useEffect, useState } from 'react'

const CountUpNumber = ({endValue,duration}) => {

    const [count, setcount] = useState(0);
    useEffect(() => {
        let startTime;
        let animationFrameId;
        const updateCount=(timeStamp)=>{
            if(!startTime) startTime=timeStamp;
            const progress=timeStamp-startTime;
            if(progress<duration)
            {
                setcount(Math.min(endValue,(progress/duration)*endValue));
                animationFrameId=requestAnimationFrame(updateCount);
            }
            else{
                setcount(endValue);
            }
        };
        animationFrameId=requestAnimationFrame(updateCount);
      
        return ()=>cancelAnimationFrame(animationFrameId);
    }, [endValue,duration]);
    
  return (
    <p className='md:font-bold font-medium text-lg xl:text-5xl'>{Math.round(count)}</p>
  )
}

export default CountUpNumber;
