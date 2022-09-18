import React, { useState } from 'react'
import { BsArrowRight, BsChevronRight } from 'react-icons/bs'
import { Element } from 'react-scroll'
import bgVideo from '../../assets/data.mp4'
import Button from '../Button'

const Hero = () => {
  const [hoverGetStart, setHoverGetStart] = useState(false)

  return (
    <Element name="Hero" className="relative h-screen">
      <video
        className="h-full w-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 flex flex-col items-center h-full justify-center text-white w-full text-center px-10">
        <h1 className="text-3xl">Virtual Banking Made Easy</h1>
        <span className="mt-10 text-xl">
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </span>
        <Button
          className="mt-8"
          onMouseOver={() => setHoverGetStart(true)}
          onMouseOut={() => setHoverGetStart(false)}
        >
          <span>Get Start</span>
          <div>
            <BsChevronRight
              className={`transition-all duration-500 top-0 ${
                hoverGetStart && 'absolute opacity-0'
              }`}
            />
            <BsArrowRight
              className={`transition-all duration-500 top-0 ${
                !hoverGetStart && 'absolute opacity-0'
              }`}
            />
          </div>
        </Button>
      </div>
    </Element>
  )
}

export default Hero
