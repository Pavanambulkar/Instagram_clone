import React from 'react'
import  Profile from '../../Assets/Profile.jpg'
import Button from '../../components/button';
import Input from "../../components/input";

const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf] flex overflow-hidden'>
        <div className='w-[20%] bg-white flex flex-col'>
            <div className='h-[30%]  flex justify-center  items-center border-b'>
              <div className='flex flex-col items-center justify-center'>

              <img className='justify-center' width={'75px'} height={'75px'} src={Profile} alt="" />
              <p className='my-4'>@Lara_Jane</p>
              <div className=" border h-[50px] flex justify-around w-[270px] text-center">
               <div className="flex flex-col justify-around items-center">
                <h4>1000</h4>
                <p>Posts</p>
               </div>
               <div>
               <h4>1000</h4>
                <p>Following</p>
               </div>
               <div>
               <h4>1000</h4>
                <p>Followers</p>
               </div>
              </div>
              </div>
            </div>
            <div className='h-[55%]  flex flex-col justify-evenly pl-12 border-b'>
              

              <div>Home</div>
              <div>Trending</div>
              <div>Messages</div>
              <div>Profile</div>
             
            </div>
            <div className='h-[15%] pt-10'>
              <div className='ml-12 cursor-pointer'>Log Out</div>
            </div>

        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide '>
            <div className='bg-white h-[75px] border-l flex justify-center items-center'>
              <div className='justify-center flex items-center'>
              <Input placeholder='Enter your Search' />
              <Button label='Search' className='mb-4' />

              </div>
            </div>
        </div>
        <div className='w-[20%] bg-slate-500'></div>

    </div>
  )
}

export default Home