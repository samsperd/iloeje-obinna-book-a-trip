import React from 'react'
import Navbar from '../../components/Navbar';
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const Home = () => {
  return (
    <>
    <Navbar title={"Search Flight"}></Navbar>

    <div className="flex flex-col text-justify gap-5 w-full">
      <div className="flex flex-col gap-5">

        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <FaPlaneDeparture className='icon' size={'25px'} />
          <input className='w-full px-1 outline-none appearance-none border-none bg-white' type="text" name='from' placeholder='From' />

        </div>
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <FaPlaneArrival className='icon' size={'25px'} />
          <input className='w-full px-1 outline-none appearance-none border-none bg-white' type="text" name='to' placeholder='To' />

        </div>
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <CiCalendarDate className='icon' size={'25px'} />
          <input className='w-full px-1 outline-none appearance-none border-none bg-white' type="text" name='date' placeholder='Departure' />

        </div>

      </div>

      <div className="heading flex py-2 items-center gap-2 text-black">
        <MdAirlineSeatReclineNormal className='icon' size={'25px'} />
      <h6 className='font-medium'>Passengers</h6>
      </div>

      <div className="passengers flex flex-col gap-5">
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <input className='w-full outline-none appearance-none border-none bg-white' type="text" name='to' placeholder='Adults' />
          <div className="flex">
            <div className="minus bg-gray-100 hover:bg-gray-200 text-black text-3xl cursor-pointer grid place-items-center py-[0.05rem] px-3 rounded">-</div>
            <div className="counter text-black text-3xl grid place-items-center py-[0.05rem] px-3 rounded">0</div>
            <div className="minus bg-gray-200 hover:bg-gray-300 text-black text-3xl grid cursor-pointer place-items-center py-[0.05rem] px-3 rounded-lg">+</div>
          </div>
        </div>
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <input className='w-full outline-none appearance-none border-none bg-white' type="text" name='to' placeholder='Children' />
          <div className="flex">
            <div className="minus bg-gray-100 hover:bg-gray-200 text-black text-3xl cursor-pointer grid place-items-center py-[0.05rem] px-3 rounded">-</div>
            <div className="counter text-black text-3xl grid place-items-center py-[0.05rem] px-3 rounded">0</div>
            <div className="minus bg-gray-200 hover:bg-gray-300 text-black text-3xl grid cursor-pointer place-items-center py-[0.05rem] px-3 rounded-lg">+</div>
          </div>
        </div>
        <div className="flex w-full border bg-white p-2 rounded-lg text-black">
          <input className='w-full outline-none appearance-none border-none bg-white' type="text" name='to' placeholder='Infants' />
          <div className="flex">
            <div className="minus bg-gray-100 hover:bg-gray-200 text-black text-3xl cursor-pointer grid place-items-center py-[0.05rem] px-3 rounded">-</div>
            <div className="counter text-black text-3xl grid place-items-center py-[0.05rem] px-3 rounded">0</div>
            <div className="minus bg-gray-200 hover:bg-gray-300 text-black text-3xl grid cursor-pointer place-items-center py-[0.05rem] px-3 rounded-lg">+</div>
          </div>
        </div>


      </div>
    </div>

</>

  )
}

export default Home