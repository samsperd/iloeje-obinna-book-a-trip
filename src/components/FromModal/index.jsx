import React from 'react'
import airports from '../../data/airports.json';

const FromModal = ({ handleFromModal }) => {
  return (
    <div className="from w-screen pb-[6.2rem] z-50 bg-white overflow-y-scroll fixed top-0 bottom-0 left-0 right-0">
        <div className='h-16 text-lg text-black font-normal'>
          <span onClick={handleFromModal} className="close px-4 py-3 text-lg absolute top-0 right-0">
            &times;
          </span>
        </div>

        <div className="airport-lists text-black px-3 py-2">
          {
            airports.map((airport, i) => (
            <div key={i} className="airport-list cursor-pointer hover:bg-white/60 border-b py-2 flex justify-between">
              <div className="location p-2">
                <div className="text-justify text-lg">
                  {airport.StateName}
                </div>
                <div className="airport text-sm text-justify text-gray-500">
                  {airport.Name}
                </div>

              </div>
              <div className="abb-airport flex p-3 justify-center items-center">
                { airport.Code }
              </div>
            </div>

             ) )
          }
        </div>
    </div>
  )
}

export default FromModal