import React from 'react'
import FooterButton from '../components/FooterButton'

const Layout = ({linkBottom, bottom, children}) => {
  
  
  return (
    <>
    
    <div className="fixed top-0 bottom-0 left-0 right-0 block  bg-gray-100 py-10 px-7">
      { children }
      {
        bottom !== undefined ?
        (
          <FooterButton link={linkBottom} title={bottom}></FooterButton>

        ) : null
      }
    </div>
    </>
  )
}

export default Layout