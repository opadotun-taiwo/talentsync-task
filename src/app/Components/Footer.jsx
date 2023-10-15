import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='pt-[96px] pb-[48px] px-[140px] flex justify-evenly gap-8'>
        <div className='mr-[100px]'>
          <Image  src='/clearlogo.png' width={150} height={30} className='mb-3'/>
          <p className='text-[#475467] text-[18px]'>ClearLink is your gateway to effortless, <br /> 
            high-quality video conferencing. 
            Join us in shaping the future of communication!</p>
        </div>

        <div className='gap-8'>
          <h3 className='text-[#667085] text-[16px] font-semibold mb-3'>Product</h3>
          <p className='text-[#475467] text-[16px] mb-2'>Overview</p>
          <p className='text-[#475467] text-[16px] mb-2'>Features</p>
          <p className='text-[#475467] text-[16px] mb-2'>Solution</p>
          <p className='text-[#475467] text-[16px] mb-2'>Tutorials</p>
          <p className='text-[#475467] text-[16px]'>Pricing</p>
        </div>

        <div  className='gap-8'>
          <h3 className='text-[#667085] text-[16px] font-semibold mb-3'>Company</h3>
          <p className='text-[#475467] text-[16px] mb-2'>About us</p>
          <p className='text-[#475467] text-[16px] mb-2'>Career</p>
          <p className='text-[#475467] text-[16px] mb-2'>Press</p>
          <p className='text-[#475467] text-[16px] mb-2'>News</p>
          <p className='text-[#475467] text-[16px] mb-2'>Contact</p>
        </div>

        <div  className='gap-8'>
          <h3 className='text-[#667085] text-[16px] font-semibold mb-3'>Resources</h3>
          <p className='text-[#475467] text-[16px] mb-2'>Blog</p>
          <p className='text-[#475467] text-[16px] mb-2'>Events</p>
          <p className='text-[#475467] text-[16px] mb-2'>Help center</p>
          <p className='text-[#475467] text-[16px] mb-2'>Tutorials</p>
          <p className='text-[#475467] text-[16px]'>Support</p>
        </div>

         <div  className='gap-8'>
          <h3 className='text-[#667085] text-[16px] font-semibold mb-3'>Legal</h3>
          <p className='text-[#475467] text-[16px] mb-2'>Terms</p>
          <p className='text-[#475467] text-[16px] mb-2'>Privacy</p>
          <p className='text-[#475467] text-[16px] mb-2'>Cookies</p>
          <p className='text-[#475467] text-[16px] mb-2'>Licences</p>
          <p className='text-[#475467] text-[16px]'>Contact</p>
        </div>

         <div className=''>
          <p className="text-[#175CD3] text-[16px] mb-3">Get the App</p>
          <Image  src='/mobile2.png' width={135} height={40} className='mb-2'/>
          <Image  src='/mobile1.png' width={135} height={40}/>
        </div>
      </div>

      <div className='flex justify-between items-center bg-[#F9FAFB] py-[48px] px-[140px]'>
          <p className='text-[#667085] text-[16px]'>© 2023 ClearLink. All rights reserved.</p>
          <Image  src='/socials.png' width={264} height={24} className='cursor-pointer'/>
      </div>
    </>
  )
}

export default Footer
