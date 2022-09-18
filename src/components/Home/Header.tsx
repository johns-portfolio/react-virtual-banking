import React, { useState } from 'react'
import { BsJustify, BsXLg } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Button from '../Button'

export type MenuName = 'Home' | 'About' | 'Discover' | 'Services' | 'Sign Up'

const menuList: {
  name: MenuName
}[] = [
  {
    name: 'About'
  },
  {
    name: 'Discover'
  },
  {
    name: 'Services'
  },
  {
    name: 'Sign Up'
  }
]

const Header = () => {
  const [showPopupMenu, setShowPopupMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState<MenuName>('Home')

  return (
    <div className="fixed top-0 z-20 w-full bg-black bg-opacity-70">
      <div className="relative z-10">
        <div className="px-6 md:px-16 py-6 flex flex-row items-center justify-between">
          <Link
            to={'Hero'}
            smooth={true}
            duration={100}
            onClick={() => setActiveMenu('Home')}
          >
            <h1 className="text-xl font-bold cursor-pointer transition-all hover:text-green-600">
              John 's Virtual Banking
            </h1>
          </Link>
          <div className="hidden md:flex flex-row items-center gap-4">
            {menuList.map((c, i) => (
              <Link
                to={c.name}
                smooth={true}
                duration={100}
                key={i}
                className={`cursor-pointer hover:text-green-600 transition-all underline-offset-8 ${
                  activeMenu === c.name && 'text-green-600 underline'
                }`}
                onClick={() => setActiveMenu(c.name)}
              >
                {c.name}
              </Link>
            ))}
            <Button className="ml-10">Sign In</Button>
          </div>
          {!showPopupMenu && (
            <FaBars
              size={30}
              className="transition-all cursor-pointer hover:scale-110 hover:text-green-600 md:hidden"
              onClick={() => setShowPopupMenu(true)}
            />
          )}
        </div>

        {showPopupMenu && (
          <div className="absolute bg-gray-900 text-white w-screen h-screen top-0 left-0 p-6 text-2xl opacity-90">
            <div className="flex flex-col items-center gap-14 relative animate-top-down">
              <div className="flex justify-end w-full mb-10">
                <BsXLg
                  size={26}
                  className="hover:scale-125 hover:text-green-600 cursor-pointer transition-all"
                  onClick={() => setShowPopupMenu(false)}
                />
              </div>
              {menuList.map((c, i) => (
                <Link
                  to={c.name}
                  smooth={true}
                  duration={100}
                  key={i}
                  className={`cursor-pointer hover:text-green-600 transition-all ${
                    activeMenu === c.name && 'text-green-600'
                  }`}
                  onClick={() => {
                    setActiveMenu(c.name)
                    setShowPopupMenu(false)
                  }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
