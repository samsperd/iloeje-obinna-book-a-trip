import React from 'react'
import FooterButton from '../components/FooterButton'

const Layout = ({bottom, children}) => {
  
  
  return (
    <>
    
    <div className="w-full h-screen block md:hidden bg-gray-100 py-10 px-7">
      { children }
    </div>
      {
        bottom !== "" ?
        (
          <FooterButton title={bottom}></FooterButton>

        ) : null
      }
    </>
  )
}

export default Layout