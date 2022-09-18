import React from 'react'

const linkList = {
  'About Us': [
    'How it works',
    'Testimonials',
    'Careers',
    'Investors',
    'Terms of Service'
  ],
  'Contact Us': ['Contact', 'Support', 'Destinations', 'Sponsorships'],
  Videos: ['Submit Video', 'Ambassadors', 'Agency', 'Influencer'],
  'Social Media': ['Instagram', 'Facebook', 'Youtube', 'Twitter']
}

const Footer = () => {
  return (
    <div className="pt-10 px-16 py-10 flex flex-row justify-center gap-24 flex-wrap md:flex-nowrap">
      {Object.entries(linkList).map(([key, items]) => (
        <div className="flex flex-col" key={key}>
          <h3 className="font-bold mb-4">{key}</h3>
          {items.map((menu) => (
            <span key={menu} className="cursor-pointer text-sm py-1 hover:text-green-600">{menu}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Footer
