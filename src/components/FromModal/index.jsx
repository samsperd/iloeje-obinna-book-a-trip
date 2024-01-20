import React from 'react'

const FromModal = ({ handleFromModal }) => {
  return (
    <div className="from w-screen pb-[6.2rem] z-50 bg-white overflow-y-scroll fixed top-0 bottom-0 left-0 right-0">
        <div className='p-3 text-lg text-black font-normal'>
          <span onClick={handleFromModal} className="close px-4 py-3 text-lg absolute top-0 right-0">
            &times;
          </span>
        </div>

        <div className="airport-lists">
          <div className="airport-list border-b">
            <div className="location">
              <div className="">
                Nairobi, Kenya
              </div>
              <div className="airport">
                Jomo Kenyatta International Airports
              </div>

            </div>
            <div className="abb-airport">
              NBO
            </div>
          </div>
        </div>
    </div>
  )
}

export default FromModal