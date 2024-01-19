import React, { useEffect, useState } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'


const Layout = ({children}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [screenWidth]);
  
  
  return (
    <>
    {
      screenWidth < 450 ?
      (
            <div className="w-full h-screen overflow-y-scroll bg-gray-100 pt-10 px-7">
                { children }
            </div>



) :
(
  <DeviceFrameset device="iPhone 8 Plus" color="black">
            <div className="w-full h-screen overflow-y-scroll bg-gray-100 pt-10 px-7">
                { children }
            </div>
        
        </DeviceFrameset>

)
}
    
{/* <div className="w-full h-screen block md:hidden bg-gray-100 pt-10 px-7">
<h1>{screenWidth}</h1>
  { children }
</div> */}
    </>
  )
}

export default Layout