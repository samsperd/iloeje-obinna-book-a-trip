import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import Layout from '../../layout';
import DatePicker from '../../components/DatePicker';
import FromModal from '../../components/FromModal';
import ToModal from '../../components/ToModal';

const Home = () => {
  const [fromModal, setFromModal] = useState(false);
  const [toModal, setToModal] = useState(false);
  const [departureModal, setDepartureModal] = useState(false);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [infants, setInfants] = useState(0)
  

  const handleFromModal = () => {
    setFromModal(!fromModal)
  }
  const handleToModal = () => {
    setToModal(!toModal)
  }

  const handleDepartureModal = () => {
    setDepartureModal(!departureModal)
  }

  return (
    <Layout bottom={"Search"}>
    <Navbar title={"Search Flight"}></Navbar>

    <div className="flex flex-col text-justify gap-5 w-full">
      <div className="flex flex-col gap-5">

        <button onClick={handleFromModal} className="flex no-underline w-full border text-sm bg-white p-2 rounded-lg text-gray-300 outline-none appearance-none border-none">
          <FaPlaneDeparture className='icon' size={'20px'} />
          <div className='w-full px-1 text-justify outline-none appearance-none border-none text-gray-300 bg-white'>
            From
          </div>

        </button>
        <button onClick={handleToModal} className="flex no-underline w-full border text-sm bg-white p-2 rounded-lg text-gray-300 outline-none appearance-none border-none">
          <FaPlaneArrival className='icon' size={'20px'} />
          <div className='w-full px-1 text-justify outline-none appearance-none border-none text-gray-300 bg-white'>
            To
          </div>

        </button>
        <button onClick={handleDepartureModal} className="flex no-underline w-full border text-sm bg-white p-2 rounded-lg text-gray-300 outline-none appearance-none border-none">
          <CiCalendarDate className='icon' size={'20px'} />
          <div className='w-full px-1 text-justify outline-none appearance-none border-none text-gray-300 bg-white'>
            Departure
          </div>
          
        </button>

      </div>

      <div className="heading flex py-2 items-center gap-2 text-black">
        <MdAirlineSeatReclineNormal className='icon' size={'25px'} />
      <h6 className='font-medium'>Passengers</h6>
      </div>

      <div className="passengers flex flex-col gap-5">
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <div className='w-full flex text-gray-400 items-center border-none bg-white'>Adults</div>
          <div className="flex">
            <button onClick={() => setAdults(adults++)} className="minus outline-none appearance-none bg-gray-100 hover:bg-gray-200 text-black text-3xl cursor-pointer grid place-items-center py-[0.05rem] px-3 rounded">-</button>
            <div className="counter text-black text-3xl grid place-items-center py-[0.05rem] px-3 rounded">{adults}</div>
            <button onClick={() => setAdults(adults++)} className="plus outline-none appearance-none bg-gray-200 hover:bg-gray-300 text-black text-3xl grid cursor-pointer place-items-center py-[0.05rem] px-3 rounded-lg">+</button>
          </div>
        </div>
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <div className='w-full flex items-center border-none text-gray-400 bg-white'>Children</div>
          <div className="flex">
            <button onClick={() => setKids(kids--)} className="minus outline-none appearance-none bg-gray-100 hover:bg-gray-200 text-black text-3xl cursor-pointer grid place-items-center py-[0.05rem] px-3 rounded">-</button>
            <div className="counter text-black text-3xl grid place-items-center py-[0.05rem] px-3 rounded">{kids}</div>
            <button onClick={() => setKids(kids++)} className="plus outline-none appearance-none bg-gray-200 hover:bg-gray-300 text-black text-3xl grid cursor-pointer place-items-center py-[0.05rem] px-3 rounded-lg">+</button>
          </div>
        </div>
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <div className='w-full flex items-center border-none text-gray-400 bg-white'>Infants</div>
          <div className="flex">
            <button onClick={() => setInfants(infants--)} className="minus outline-none appearance-none bg-gray-100 hover:bg-gray-200 text-black text-3xl cursor-pointer grid place-items-center py-[0.05rem] px-3 rounded">-</button>
            <div className="counter text-black text-3xl grid place-items-center py-[0.05rem] px-3 rounded">{infants}</div>
            <button onClick={() => setInfants(infants++)} className="plus outline-none appearance-none bg-gray-200 hover:bg-gray-300 text-black text-3xl grid cursor-pointer place-items-center py-[0.05rem] px-3 rounded-lg">+</button>
          </div>
        </div>


      </div>
    </div>

    {
      departureModal ? (
        <DatePicker handleDepartureModal={handleDepartureModal} />

      ) : null
    }
    {
      fromModal ? (
        <FromModal handleFromModal={handleFromModal} />
      ) : null
    }
    {
      toModal ? (
        <ToModal handleToModal={handleToModal} />
      ) : null
    }


</Layout>

  )
}

export default Home