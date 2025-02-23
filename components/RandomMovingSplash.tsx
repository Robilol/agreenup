import {FC, useEffect, useState} from "react";
import Image from "next/image";

interface RandomMovingSplashProps {
  width: number
  height: number
  img: string
  left: number
  top: number
}

const RandomMovingSplash: FC<RandomMovingSplashProps> = ({width, img, height, left, top}) => {
  const [pos, setPos] = useState<{left: number, top: number}>({left, top})

  const getNewPos = () => {
    const h = window.innerHeight - (height / 2);
    const w = window.innerWidth - (width / 2);

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    setPos({left: nw, top: nh})
  }

  useEffect(() => {
    getNewPos()
    const interval = setInterval(() => getNewPos(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute transition-all duration-[10000ms] ease-linear" style={{
      width, height,
      left: pos.left,
      top: pos.top
    }}>
      <Image src={img} fill alt=""/>
    </div>
  )

}

export default RandomMovingSplash
