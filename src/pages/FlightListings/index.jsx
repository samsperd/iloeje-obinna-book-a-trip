import React from 'react'
import Navbar from '../../components/Navbar'
import { IoIosAirplane } from 'react-icons/io'
import { MdAirlineSeatReclineNormal, MdCompareArrows, MdOutlineCompareArrows } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Layout from '../../layout'
import Flights from '../../data/flight-listing.json';
import moment from 'moment'




function formatNumberWithCommas(number) {
  var numberString = number.toString();

  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return numberString;
}

const FlightListings = () => {


  const formattedTime = (string) => {
  
    const dateTime = moment(string);
    
    return dateTime.format("hh:mm A");
  }
  


  return (
    <Layout>
      <Navbar backBtn={true} title={'Flight Listings'}></Navbar>
      <div className="content">
        <div className="heading-bar p-2 bg-white rounded-xl">
          <div className="flight-icons px-3 py-2 flex items-center">
            <div className="circle border-[#002c5a] rounded-full p-2 border-2"></div>
            <div className="line w-full h-0 grid place-items-center text-black  border-t-[1px] border-dashed">
              <IoIosAirplane className='icon -mt-3 text-[#002c5a]' size={'25px'} />
            </div>
            <div className="circle border-[#002c5a] rounded-full p-2 border-2"></div>
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
            <MdOutlineCompareArrows className='icon p-2 bg-slate-200 rounded' size={'30px'} />
              <h5 className='font-semibold text-[10px]'>Sat, 12 Mar</h5>

            </div>
            <div className="in-and-out border flex items-center">
            <MdAirlineSeatReclineNormal className='icon text-[#002c5a]' size={'25px'} />
              <h6 className='text-[8px] text-justify font-semibold'>3 Adults &#183; 2 Children &#183; 1 infant</h6>

            </div>
          </div>
        </div>
        <div className="content-bar">
          <h5 className='text-black my-4 text-justify text-sm font-medium'>Avaliable Flights <span className='text-[#2875C7] text-xs font-semibold'>{Flights.length} Flights</span></h5>
          {
            Flights.map((flight, i) => (
              <div key={i} className="content-list p-2 py-5 my-4 bg-white rounded-xl">

                <div className="flight-details text-black flex justify-center">
                  <span className='text-xs font-light text-gray-400'>{flight.Duration}</span>
                </div>
                
                <div className="flight-icons pt-2 flex items-center">
                  <span className='font-bold text-sm w-[70%] text-black'> {formattedTime(flight.DepartureDate)}</span>
                  <div className="circle rounded-full border-[#002c5a] p-2 border-2"></div>
                  <div className="line w-full h-0 grid place-items-center text-black  border-t-[1px] border-dashed">
                    <IoIosAirplane className='icon text-[#002c5a] -mt-3' size={'25px'} />
                    <span className='font-light text-xs'>Non-stop</span>
                  </div>
                  <div className="circle border-[#002c5a] rounded-full p-2 border-2"></div>
                  <span className='font-bold text-sm w-[70%] text-black'> {formattedTime(flight.ArrivalDate)}</span>
                  
                </div>
                <div className="flight-icons px-3 my-1 flex text-blue-950 justify-between items-center">
                  <span className='font-light'>{flight.DepartureAirportCode}</span>
                  <span className='font-light'>{flight.ArrivalAirportCode}</span>
                  
                </div>

                <div className="flight-details my-5 text-black flex justify-between">
                  <div className="in-and-ou flex items-center gap-1">
                    <h6 className='text-xs font-normal text-gray-500'>{flight.DepartureAirportName} &#183; {flight.FlightClass}</h6>

                  </div>
                  <div className="in-and-out flex items-center">
                    <h5 className='font-medium'>N{ formatNumberWithCommas(flight.TicketFare)}</h5>

                  </div>
                </div>
                <div className="btn mt-8 w-full">
                  <Link to={`/makepayment/${i}`} className='bg-[#002c5a] w-[80%] hover:bg-blue-950 text-white font-bold py-2 px-4 rounded'>
                    Make Payment
                  </Link>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default FlightListings