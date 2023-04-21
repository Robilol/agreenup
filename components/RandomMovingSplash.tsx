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
    const h = window.innerHeight - height;
    const w = window.innerWidth - width;

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    setPos({left: nw, top: nh})
  }

  useEffect(() => {
    getNewPos()
    const interval = setInterval(() => getNewPos(), 15000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative transition-all duration-[15000ms] ease-linear" style={{
      width, height,
      left: pos.left,
      top: pos.top
    }}>
      <Image src={img} fill alt=""/>
    </div>
  )

}

export default RandomMovingSplash
