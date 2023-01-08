import React from 'react'
import  Profile from '../../Assets/Profile.jpg'
import Button from '../../components/button';
import Input from "../../components/input";
import post from '../../Assets/post.jpg'
import {GrHomeRounded, GrSave} from 'react-icons/gr'
import {MdOutlineExplore, MdApps} from 'react-icons/md'
import {GiPoolTriangle} from 'react-icons/gi'
import {AiOutlineSetting, AiOutlinePlus} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BsSearch} from 'react-icons/bs'


const Home = () => {
  return (
    <div className='h-screen bg-[#d2cfdf] flex overflow-hidden'>
        <div className='w-[20%] bg-white flex flex-col'>
            <div className='h-[30%]  flex justify-center  items-center border-b'>
              <div className='flex flex-col items-center justify-center'>

              <img className='justify-center' width={'75px'} height={'75px'} src={Profile} alt="" />
              
              <h4 className='font-bold text-xl'>Lara Jane</h4>
              <p className='my-4 mt-0'>@Lara_Jane</p>
              
              
              <div className=" border h-[50px] flex justify-around w-[270px] text-center">
               <div className="flex flex-col justify-around items-center">
                <h4 className='font-bold'>1000</h4>
                <p>Posts</p>
               </div>
               <div>
               <h4 className='font-bold'>1000</h4>
                <p>Following</p>
               </div>
               <div>
               <h4 className='font-bold'>1000</h4>
                <p>Followers</p>
               </div>
              </div>
              </div>
            </div>
            <div className='h-[55%]  flex flex-col justify-evenly pl-12 border-b'>
              

              <div className='flex text-center'>
                
                <GrHomeRounded className='text-2xl' />
                <h4 className='ml-2' >Feed</h4>
                
               
              </div>
              <div className='flex text-center '>
                <MdOutlineExplore className='text-2xl'/>
              <h4 className='ml-2'>Explore</h4>
             </div>
             <div className='flex text-center '>
              <GrSave/>
              <h4 className='ml-3'>My Favourites</h4>


             </div>
             <div className='flex text-center '>
                <MdApps className='text-2xl'/>
              <h4 className='ml-2'>Status</h4>
             </div>
             <div className='flex text-center '>
                <GiPoolTriangle className='text-2xl'/>
              <h4 className='ml-2'>Direct</h4>
             </div>
             <div className='flex text-center '>
                <AiOutlineSetting className='text-2xl'/>
              <h4 className='ml-2'>Settings</h4>
             </div>
              
             
            </div>
            <div className='h-[15%] pt-10 '>
              <div className='ml-12 cursor-pointer flex text-center'>
              <FiLogOut className='text-2xl'/>
                <h4 className='ml-2'>Log Out</h4>
                </div>
            </div>

        </div>
        <div className='w-[60%] overflow-scroll h-full scrollbar-hide '>
            <div className='bg-white h-[75px] border-l flex justify-evenly items-center pt-4'>
              <div className='justify-center flex items-center'>
              <Input placeholder='Enter your Search' />
                <button className='bg-red-600 w-[15%] rounded-lg ml-4 h-[30px] mb-4 text-center flex justify-center' >

                <BsSearch className='text-xl text-white flex m-auto justify-center items-center'/>
                </button>

              </div>
              <div className='rounded-lg mr-3 w-[220px] h-[30px] flex  justify-center text-center mb-4 hover:bg-red-700 bg-red-400'>
                <AiOutlinePlus className='text-white mt-2'/>
                <button className='font-semibold text-white ml-2 '> Create New Post</button>
              {/* <Button label=" New Post" className='rounded-lg mb-4 hover:bg-red-700 bg-red-400'/> */}
              </div>
            </div>
            <div className='bg-white w-[60%]  mx-auto mt-32 p-8'>
             <div className='border-b flex items-center  pb-4'>
              {/* <Profile width={'50px'} height={'50px'} /> */}
              <img src={Profile} height={'50px'} width={'50px'} alt="" />
              <div className='ml-4'>

              <h3>Lara Jane</h3>
              <p>@Lara_Jane</p>
              </div>
             </div>
             <div className='border-b pb-4 mb-4'>
              <img className='h-[300px]' src={post} alt="" />
             </div>
             <div className='flex justify-evenly'>
            <div>12.4k Likes</div>
            <div>1.4k Comments</div>
            <div>1k Shares</div>

             </div>
            </div>
            
        </div>
        <div className='w-[20%] bg-[#F2F5F8]'></div>

    </div>
  )
}

export default Home