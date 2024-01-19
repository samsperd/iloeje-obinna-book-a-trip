import React from 'react'
import Navbar from '../../components/Navbar'
import { IoIosAirplane } from 'react-icons/io'
import { SiEmirates } from 'react-icons/si'
import { MdAirlineSeatReclineNormal, MdCompareArrows, MdOutlineCompareArrows } from 'react-icons/md'

const MakePayment = () => {
  return (
    <>
      <Navbar title={'Make Payment'}></Navbar>
      <div className="content">
        <div className="heading-bar border p-2 bg-white rounded-xl">
          <div className="flight-name text-red-600 text-justify">
            <span className='flex items-center text-sm font-medium p-2'><SiEmirates /> Emirates</span>
          </div>
          <div className="flight-icons border px-3 py-2 flex items-center">
            <div className="circle rounded-full p-2 border-2"></div>
            <div className="line w-full border h-0 grid place-items-center text-black  border-t-[1px] border-dashed">
              <IoIosAirplane className='icon -mt-3' size={'25px'} />
            </div>
            <div className="circle rounded-full p-2 border-2"></div>
          </div>
          <div className="flight-locations flex justify-between px-2">
            <div className="flight-location1 grid place-items-start">
              <span className="text-black font-bold">
                LOS
              </span>
              <span className="text-black text-xs">
                Lagos, Nigeria
              </span>
            </div>
            <div className="flight-location1 grid place-items-end">
              <span className="text-black font-bold">
                ABJ
              </span>
              <span className="text-black text-xs">
                Abidjan, Cote d'ivore
              </span>
            </div>
          </div>
          <div className="flight-details my-3 text-black flex justify-between">
            <div className="in-and-out border flex items-center gap-1">
            <MdOutlineCompareArrows className='icon p-2 bg-slate-200 rounded' size={'35px'} />
              <h5 className='font-semibold'>Sat, 12 Mar</h5>

            </div>
            <div className="in-and-out border flex items-center">
            <MdAirlineSeatReclineNormal className='icon' size={'25px'} />
              <h6 className='text-xs font-semibold'>3 Adults &#183; 2 Children &#183; 1 infant</h6>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MakePayment