import React from 'react'
import { Element } from 'react-scroll'

import undraw_designer_life_re_6ywf from '../../assets/undraw_designer_life_re_6ywf.svg'
import undraw_success_factors_re_ce93 from '../../assets/undraw_success_factors_re_ce93.svg'
import undraw_finance_re_gnv2 from '../../assets/undraw_finance_re_gnv2.svg'

const serviceList: {
  image: string
  title: string
  description: string
}[] = [
  {
    image: undraw_finance_re_gnv2,
    title: 'Reduce Expenses',
    description: 'We help reduce your fees and incress your overall revenue.'
  },

  {
    image: undraw_designer_life_re_6ywf,
    title: 'Vurtual Offices',
    description: 'You can access out platform online anywhere in the world.'
  },

  {
    image: undraw_success_factors_re_ce93,
    title: 'Premium Benefits',
    description: 'Unlock our special membership card that returns 5% cash back.'
  }
]

const OurService = () => {
  return (
    <Element
      name="Services"
      className="min-h-screen pt-20 px-16 py-10 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-center font-bold">Our Services</h1>
        <div className="flex flex-row flex-wrap md:flex-nowrap gap-10 md:gap-4 mt-16">
          {serviceList.map((s, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-xl p-4 text-black text-center hover:scale-105 transition-all cursor-pointer"
            >
              <img src={s.image} className="p-14" />
              <span className="text-lg font-bold">{s.title}</span>
              <span className="text-lg">{s.description}</span>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default OurService
