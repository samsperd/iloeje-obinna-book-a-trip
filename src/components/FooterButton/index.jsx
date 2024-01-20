import React from 'react'
import { Link } from 'react-router-dom'

const FooterButton = ({ link, title }) => {
  return (
    <div className='h-24 grid z-10 place-items-center fixed bottom-0 right-0 left-0'>
        {
          link ? (
          <Link to={link} className="btn no-underline bg-blue-950 text-white text-lg py-3 rounded-md w-[80%]">
              { title }
          </Link>

          ) : (
          <button className="btn bg-blue-950 text-white text-lg py-3 rounded-md w-[80%]">
              { title }
          </button>

          )
        }
    </div>
  )
}

export default FooterButton