import React from 'react'
import Navbar from '../../components/Navbar';
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import airports from './../../data/airports.json';
import { Link } from 'react-router-dom';
import FooterButton from '../../components/FooterButton';
import Layout from '../../layout';

const Home = () => {
  return (
    <Layout bottom={"Search"}>
    <Navbar title={"Search Flight"}></Navbar>

    <div className="flex flex-col text-justify gap-5 w-full">
      <div className="flex flex-col gap-5">

        <button className="flex no-underline w-full border text-sm bg-white p-2 rounded-lg text-gray-300 outline-none appearance-none border-none">
          <FaPlaneDeparture className='icon' size={'20px'} />
          <div className='w-full px-1 text-justify outline-none appearance-none border-none text-gray-300 bg-white'>
            From
          </div>

        </button>
        <button className="flex no-underline w-full border text-sm bg-white p-2 rounded-lg text-gray-300 outline-none appearance-none border-none">
          <FaPlaneArrival className='icon' size={'20px'} />
          <div className='w-full px-1 text-justify outline-none appearance-none border-none text-gray-300 bg-white'>
            To
          </div>

        </button>
        <button className="flex no-underline w-full border text-sm bg-white p-2 rounded-lg text-gray-300 outline-none appearance-none border-none">
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

    {/* <FooterButton title={"Search"} /> */}
</Layout>

  )
}

export default Home