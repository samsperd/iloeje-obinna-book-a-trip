import React from 'react'

const Layout = ({children}) => {
  
  
  return (
    <>
    
    <div className="w-full h-screen block md:hidden bg-gray-100 pt-10 px-7">
      { children }
    </div>
    </>
  )
}

export default Layout