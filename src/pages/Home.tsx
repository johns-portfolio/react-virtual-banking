import React from 'react'
import Header, { MenuName } from '../components/Home/Header'
import Hero from '../components/Home/Hero'
import Info from '../components/Home/Info'
import undraw_by_my_car_re_j3jt from '../assets/undraw_by_my_car_re_j3jt.svg'
import undraw_savings_re_eq4w from '../assets/undraw_savings_re_eq4w.svg'
import undraw_team_collaboration_re_ow29 from '../assets/undraw_team_collaboration_re_ow29.svg'
import OurService from '../components/Home/OurService'
import Footer from '../components/Home/Footer'

export interface InfoData {
  id: MenuName
  topLine: string
  headLine: string
  description: string
  button?: {
    text: string
  }
  image: any
  dark?: boolean
  imageFirst?: boolean
}

const infoList: InfoData[] = [
  {
    id: 'About',
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fees',
    description:
      'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    button: {
      text: 'Get Started'
    },
    dark: true,
    image: undraw_by_my_car_re_j3jt
  },
  {
    id: 'Discover',
    topLine: 'Unlimited Access',
    headLine: 'Login to your account at any time',
    description:
      'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    button: {
      text: 'Learn More'
    },
    image: undraw_savings_re_eq4w,
    imageFirst: true
  }
]

const Home = () => {
  return (
    <div className="bg-black text-gray-100">
      <Header />
      <Hero />
      {infoList.map((info) => (
        <Info key={info.id} info={info} />
      ))}
      <OurService />
      <Info
        info={{
          id: 'Sign Up',
          topLine: 'Join Our Team',
          headLine: 'Creating an account is extremely easy',
          description:
            'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you\'re ready to go.',
          button: {
            text: 'Start Now'
          },
          image: undraw_team_collaboration_re_ow29
        }}
      />
      <Footer />
    </div>
  )
}
export default Home
