import React from 'react'
import Button from '../Button'
import { InfoData } from '../../pages/Home'
import { Element } from 'react-scroll'

const Info = ({ info }: { info: InfoData }) => {
  return (
    <Element
      name={info.id}
      className={`min-h-screen pt-20 px-8 md:px-16 py-10 flex flex-col justify-center ${
        info.dark ? '' : 'bg-white'
      }`}
    >
      <div
        className={`flex gap-10 max-w-6xl mx-auto ${
          info.imageFirst
            ? 'flex-col-reverse md:flex-row-reverse'
            : 'flex-col md:flex-row'
        }`}
      >
        <div className="flex flex-1 flex-col items-start gap-6">
          <h3
            className={`text-lg font-bold uppercase ${
              info.dark ? 'text-green-300' : 'text-green-500'
            }`}
          >
            {info.topLine}
          </h3>
          <h1
            className={`text-5xl font-bold ${info.dark ? '' : 'text-gray-600'}`}
          >
            {info.headLine}
          </h1>
          <span className={`text-lg py-4 ${info.dark ? '' : 'text-gray-600'}`}>
            {info.description}
          </span>
          {info.button && <Button>{info.button.text}</Button>}
        </div>
        <div className="flex-1 p-10">
          <img src={info.image} className="w-full object-contain" />
        </div>
      </div>
    </Element>
  )
}

export default Info
