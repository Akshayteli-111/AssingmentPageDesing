
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import Header from '@/components/header';
function App() {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (

    <>



      <div className='bg-[#a0b488] p-[24px]'>
        <div className="bg-white rounded-[24px]  p-[24px] ">
          <Header/>
          <div className='grid  grid-cols-12 gap-[12px]'>
            <div className='col-span-12 md:col-span-8'>
              <div className="">
                <div className="text-[40px] md:text-[70px] text-[#434141] leading-[40px] md:leading-[70px] font-medium font-kanit">Art fusion where: <span className='font-kanit'>digital</span> </div>
                <div className='flex flex-col md:flex-row gap-[10px] justify-between items-start  md:items-center'>

                  <Image src="/assets/HD-wallpaper1.png" width={150} height={10} alt='logo icon' className="" />

                  <div className="text-[#434141] text-[40px] md:text-[70px] leading-[40px] md:leading-[70px] font-medium font-kanit "> artistry meets  </div>
                  <div className='flex items-center'>
                    <Image src="/assets/client1.png" width={50} height={10} alt='logo icon' className=" rounded-full" />
                    <Image src="/assets/client2.png" width={50} height={10} alt='logo icon' className="-ml-[10px] rounded-full" />
                    <Image src="/assets/client1.png" width={50} height={10} alt='logo icon' className="j-ml-[10px] rounded-full" />

                  </div>

                </div>

                <div className='grid grid-cols-12 gap-[12px] items-center mb-[30px]'>
                  <div className='col-span-12 md:col-span-5'>
                    <div className='text-[18px]'>Experience the versatility of digital art and its ability to create a wide range of styles.
                    </div>
                  </div>
                  <div className='col-span-12 md:col-span-7'>

                    <div className='text-[40px] md:text-[70px] leading-[40px] md:leading-[70px] font-medium font-kanit text-[#434141]'>virtual reality</div>
                  </div>
                </div>




                <div className='grid grid-cols-12 gap-[12px]'>
                  <div className='col-span-12 md:col-span-7'>
                    <div className='relative'>
                      <Image src="/assets/curvedImg.png" width={500} height={380} alt='logo icon' className="imghightAdj" />
                      <div className='rounded-[30px]  bg-[#f4f4f4] font-semibold leading-[22px] md:leading-[24px] text-[14px] p-[14px] absolute top-0 right-0 w-[111px]   md:w-[185px] h-[130px] md:h-[125px] '>
                        Digital art is about the creative mind behind it
                      </div>

                      <div className='rounded-[40px]  bg-[#f4f4f4]  p-[14px] absolute bottom-[6px] left-[6px] right-[6px]     '>
                        <div className=' leading-[18px] font-medium text-[24px] py-[20px]'>Cases worth reading</div>
                        <div>
                          <div className='text-[#6e6e6e] flex justify-between items-center  p-[10px] border-y border-[#e9e9e9]'>
                            <Image src="/assets/line1.png" width={30} height={30} alt='logo icon' className="  " />
                            <div className='text-[12px] font-medium'>EXPLORING THE BOUNDLESS CRESTIVITY</div>
                            <div><FaArrowRight className='text-[16px] font-normal' /></div>
                          </div>
                          <div className='text-[#6e6e6e] flex justify-between items-center  p-[10px] '>
                            <Image src="/assets/line1.png" width={30} height={30} alt='logo icon' className="  " />
                            <div className='text-[12px] font-medium'>EXPLORING THE BOUNDLESS CRESTIVITY</div>
                            <div><FaArrowRight className='text-[16px] font-normal' /></div>
                          </div>


                        </div>
                      </div>
                    </div>
                    <div>

                    </div>
                  </div>

                  <div className='col-span-12 md:col-span-5'>

                    <div className='bg-[#f4f4f4] rounded-[30px]'>
                      <div className='flex justify-between items-center p-[24px]'>
                        <div className='font-medium text-[24px]'>01</div>
                        <div className='flex items-center gap-[10px] '>
                          <div className='p-[6px] bg-white rounded-full'><FaArrowRight className=' text-[12px] text-black  ' /></div>
                          <div className='p-[5px] bg-black rounded-full'><FaArrowRight className=' text-[12px]  text-white  ' /></div>
                        </div>
                      </div>
                      <div className='p-[24px] mt-[140px]'>
                        <div className='text-black text-[12px] font-semibold'>Tutorials and resources</div>
                        <div className='text-black font-medium text-[24px] pt-[6px]'>Art techniques</div>
                      </div>


                    </div>

                    <div className='bg-[#e4e4e4] rounded-[30px] p-[12px] md:p-[30px] mt-[16px]'>
                      <div className='flex   items-center justify-between'>
                        <div className='flex items-center'>
                          <div className='bg-white px-[14px] py-[4px] rounded-full text-[14px]'> #Features</div>
                          <div className='bg-white px-[14px] py-[4px] rounded-full -ml-[8px] text-[14px]'>
                            #What'snew
                          </div>

                        </div>

                        <div
  onClick={handleToggle}
  className={`relative flex items-center cursor-pointer transition-colors duration-300 
    ${isToggled ? "bg-black" : "bg-gray-300"} 
    w-14 h-8 md:w-10 md:h-6 rounded-full p-1`}
>
  <div
    className={`bg-white rounded-full shadow-md transform transition-transform duration-300 
      ${isToggled ? "translate-x-6 md:translate-x-4" : "translate-x-0"} 
      w-6 h-6 md:w-4 md:h-4`}
  ></div>
</div>
                      </div>
                      <div className='text-black font-medium text-[24px] pt-[6px] mt-[24px]'>Meet our artits </div>


                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='col-span-12 md:col-span-4'>

              <div className="bg-[#f5fbef] p-[10px] rounded-[30px]">
                <div
                  className="h-[544px] p-[24px] flex flex-col justify-end bg-center bg-cover rounded-[30px]"
                  style={{
                    backgroundImage: "url('/Assets/curve-background.png')",
                  }}
                >


                  <div className="text-white font-medium text-[24px] pt-[6px]">Join our community</div>
                  <div className='text-white text-[12px] font-semibold'>Connect with other digital art enthusiasts!</div>
                  <div className='flex justify-between mt-[50px]'>
                    <div className="flex items-center">
                      <div className="p-[10px] bg-white rounded-full">
                        <FaArrowRight className="text-[14px] text-black" />
                      </div>
                      <div className="p-[10px] bg-white rounded-full -ml-[8px]">
                        <FaFacebookF className="text-[14px] text-black" />
                      </div>
                      <div className="p-[10px] bg-white rounded-full -ml-[8px]">
                        <FaInstagramSquare className="text-[14px] text-black" />
                      </div>
                    </div>
                    <div>
                      <div className='p-[10px] bg-white rounded-full'><FaArrowRight className=' text-[14px] text-black  ' /></div>

                    </div>
                  </div>

                </div>
              </div>

              <div className='bg-[#f4f4f4] rounded-[24px] p-[14px] mt-[12px]'>
                <div className='flex items-center gap-[10px]'>

                  <div className='bg-white rounded-full p-[10px] '><GrGallery className='text-[14px]' /></div>

                  <div>
                    <div className='flex items-center gap-[10px]'>
                      <div className='text-[#5b5b5b] text-medium text-[18px]'>Art events</div>
                      <BsStars className='text-[#9ca18f]' />
                    </div>

                    <div className='text-[#cecece] text-[14px]'>
                      Lorem Ipsum Neque porr

                    </div>
                  </div>
                </div>


              </div>
              <div className='bg-[#f4f4f4] rounded-[24px] p-[14px] mt-[12px]'>
                <div className='flex items-center gap-[10px]'>

                  <div className='bg-white rounded-full p-[10px] '><GrGallery className='text-[14px]' /></div>

                  <div>
                    <div className='flex items-center gap-[10px]'>
                      <div className='text-[#5b5b5b] text-medium text-[18px]'>Our collections</div>
                      <BsStars className='text-[#9ca18f]' />
                    </div>

                    <div className='text-[#cecece] text-[14px]'>
                      Lorem Ipsum Neque porr

                    </div>
                  </div>
                </div>


              </div>



            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default App;