import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-5 mx-[16px] p-4 bg-[#D0D5DD] rounded-[100px] border border-[#D0D5DD]'>
      <div><Image  src='/clearlogo.png' width={150} height={30}/></div>
      <div className='flex justify-center items-center gap-[40px] text-[#667085] text-[18px]'>
        <p className='flex justify-center items-center gap-2'>Products<span><Image src='/icon_.png' width={13} height={13}/></span></p>
        <p className='flex justify-center items-center gap-2'>Solutions<span><Image src='/icon_.png' width={13} height={13}/></span></p>
        <p className='flex justify-center items-center gap-2'>Resources<span><Image src='/icon_.png' width={13} height={13}/></span></p>
        <p className='flex justify-center items-center gap-2'>Price<span><Image src='/icon_.png' width={13} height={13}/></span></p>
      </div>
      <div>
        <button className='rounded-[100px] bg-white mr-2 border-[#98A2B3] text-[#98A2B3] py-[14px] px-[24px]'>Talk sales</button>
        <button className='rounded-[100px] bg-[#175CD3] ml-2 border-[#98A2B3] text-white py-[14px] px-[24px]'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Navbar
