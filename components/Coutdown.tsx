import {FC, useEffect, useState} from "react";

interface CountdownProps {
  targetDate: Date;
}

interface RemainingTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Coutdown:FC<CountdownProps> = ({targetDate}) => {
  const [remainingTime, setRemainingTime] = useState<RemainingTime>(
    calculateRemainingTime()
  );

  function calculateRemainingTime(): RemainingTime {
    const difference = +new Date(targetDate) - +new Date();
    let remainingTime: RemainingTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      remainingTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return remainingTime;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = remainingTime;


  return (
    <div className="flex gap-5 font-hk-grotesk text-primary-50">
      <div className="flex flex-col sm:flex-row sm:items-baseline">
    <span className="countdown text-4xl sm:text-6xl">
        {/*@ts-ignore*/}
        <span style={{"--value": days}}></span>
    </span>
        jour(s)
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline">
    <span className="countdown text-4xl sm:text-6xl">
      {/*@ts-ignore*/}
        <span style={{"--value": hours}}></span>
    </span>
        heure(s)
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline">
    <span className="countdown text-4xl sm:text-6xl">
      {/*@ts-ignore*/}
      <span style={{"--value": minutes}}></span>
    </span>
        minute(s)
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline">
    <span className="countdown text-4xl sm:text-6xl">
      {/*@ts-ignore*/}
      <span style={{"--value": seconds}}></span>
    </span>
        seconde(s)
      </div>
    </div>
  )
}
