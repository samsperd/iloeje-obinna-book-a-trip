import React from 'react'
import { IoMdArrowBack } from "react-icons/io";

const Navbar = ({backBtn, title, ...props}) => {
  const goBack = () => {
    history.back();
  };
  return (
    <div className='font-bold text-black py-4 relative' {...props}>
      {
        backBtn ? (
          <IoMdArrowBack onClick={goBack} className='absolute cursor-pointer bg-white rounded-sm hover:bg-white/65' size={'25px'} />

        ) : null
      }
        { title }
    </div>
  )
}

export default Navbar