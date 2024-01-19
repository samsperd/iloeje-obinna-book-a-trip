import React from 'react'
import Navbar from '../../components/Navbar'
import { IoIosAirplane } from 'react-icons/io'
import { MdAirlineSeatReclineNormal, MdCompareArrows, MdOutlineCompareArrows } from 'react-icons/md'
import { Link } from 'react-router-dom'

const FlightListings = () => {
  return (
    <>
      <Navbar title={'Flight Listings'}></Navbar>
      <div className="content">
        <div className="heading-bar border p-2 bg-white rounded-xl">
          <div className="flight-icons px-3 py-2 flex items-center">
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
        <div className="content-bar">
          <h5>Avaliable Flights <span>6 Flights</span></h5>
          <div className="content-list border p-2 py-5 bg-white rounded-xl">

            <div className="flight-details text-black flex justify-center">
              <span className='text-xs font-light text-gray-400'>4h 20m</span>
            </div>
            
            <div className="flight-icons pt-2 flex items-center">
              <span className='font-bold text-md border w-[70%] text-black'> 06: 45 am</span>
              <div className="circle rounded-full p-2 border-2"></div>
              <div className="line w-full border h-0 grid place-items-center text-black  border-t-[1px] border-dashed">
                <IoIosAirplane className='icon -mt-3' size={'25px'} />
                <span className='font-light text-xs'>Non-stop</span>
              </div>
              <div className="circle rounded-full p-2 border-2"></div>
              <span className='font-bold text-md w-[70%] text-black'> 06: 45 am</span>
              
            </div>
            <div className="flight-icons px-3 border my-1 flex text-blue-950 justify-between items-center">
              <span className='font-light'>NBO</span>
              <span className='font-light'>MBA</span>
              
            </div>

            <div className="flight-details my-3 text-black flex justify-between">
              <div className="in-and-out border flex items-center gap-1">
                <h6 className='text-xs font-normal text-gray-500'>Kenya Airways &#183; Economy</h6>

              </div>
              <div className="in-and-out border flex items-center">
                <h5 className='font-semibold'>N350,000.00</h5>

              </div>
            </div>
            <div className="btn">
              <Link to={'/makepayment'} className='bg-blue-900 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded'>
                Make Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlightListings