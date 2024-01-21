import React from 'react'
import Navbar from '../../components/Navbar'
import { IoIosAirplane } from 'react-icons/io'
import { SiEmirates } from 'react-icons/si'
import { MdAirlineSeatReclineNormal, MdCompareArrows, MdOutlineCompareArrows } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import Flights from '../../data/flight-listing.json';
import Layout from '../../layout'




function formatNumberWithCommas(number) {
  var numberString = number.toString();

  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return numberString;
}

const MakePayment = () => {
  const { id } = useParams()

  
  const flight = Flights[id]
  
  return (
    <Layout>
      <Navbar backBtn={true} title={'Make Payment'}></Navbar>
      <div className="content">
        <div className="heading-bar p-2 bg-white rounded-xl">
          <div className="flight-name text-red-600 text-justify">
            <span className='flex items-center text-sm font-medium p-2'><SiEmirates /> {flight.OperatingAirlineName}</span>
          </div>
          <div className="flight-icons px-3 py-2 flex items-center">
            <div className="circle rounded-full border-[#003873] p-2 border-2"></div>
            <div className="line w-full border h-0 grid place-items-center text-black  border-t-[1px] border-dashed">
              <IoIosAirplane className='icon -mt-3 text-[#003873] ' size={'25px'} />
            </div>
            <div className="circle border-[#003873] rounded-full p-2 border-2"></div>
          </div>
          <div className="flight-locations flex justify-between px-2">
            <div className="flight-location1 grid place-items-start">
              <span className="text-black font-bold">
                {flight.DepartureAirportCode}
              </span>
              <span className="text-black text-xs">
                {flight.DepartureAirportName}
              </span>
            </div>
            <div className="flight-location1 grid place-items-end">
              <span className="text-black font-bold">
                {flight.ArrivalAirportCode}
              </span>
              <span className="text-black text-xs">
                {flight.ArrivalAirportName}
              </span>
            </div>
          </div>
          <div className="flight-details my-3 text-black flex justify-between">
            <div className="in-and-out flex items-center gap-1">
            <MdOutlineCompareArrows className='icon p-2 bg-slate-200 text-[#003873] rounded' size={'30px'} />
              <h5 className='font-semibold text-[10px]'>Sat, 12 Mar</h5>

            </div>
            <div className="in-and-out flex items-center gap-2">
            <MdAirlineSeatReclineNormal className='icon text-[#003873] bg-slate-200' size={'25px'} />
              <h6 className='text-[10px] text-justify font-semibold'>3 Adults &#183; 2 Children &#183; 1 infant</h6>

            </div>
          </div>
        </div>

        <div className="summary mt-4 text-black">
          <h6 className='text-justify py-3'>Summary</h6>
          <div className="dets flex bg-white rounded-lg p-2 flex-col">
            <div className="det flex py-2 justify-between">
              <span className="name text-xs font-semibold text-slate-400">Ticket fare</span>
              <div className="price text-sm font-semibold">N {formatNumberWithCommas(flight.TicketFare)}</div>
            </div>
            <div className="det flex justify-between">
              <span className="name text-xs font-semibold text-slate-400">Service Charges</span>
              <div className="price text-sm font-semibold">N {formatNumberWithCommas(flight.ServiceCharge)}</div>
            </div>
          </div>
          <div className="tt-amount mt-4 flex justify-between p-2 rounded-lg bg-white">
            <span className="nam text-xs font-semibold text-[#003873]">
              Total Amount
            </span>
            <div className="fare text-sm font-semibold">
              N {formatNumberWithCommas(flight.TotalFare)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MakePayment