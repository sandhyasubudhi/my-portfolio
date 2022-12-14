import React from 'react'
import MyImage from '../assets/myImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full
                '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 2+ years of experience building and designing software.
                        Currently, I love to work on web applications using technologies like
                        Reactjs and Tailwind CSS.
                    </p>

                    <div>
                        <button className='group bg-gradient-to-r from-cyan-500 to-blue-500 w-fit px-6 py-3 my-2 rounded-2xl flex items-center cursor-pointer text-white '>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={MyImage} alt="my profile" width="400" className='rounded-2xl mx-auto w-2/3 md:w-full max-w-sm h-auto' />
                    {/* <img src="https://mdbootstrap.com/img/new/slides/041.jpg" class="max-w-full h-auto " alt="..." /> */}
                </div>
            </div>
        </div>
    )
}

export default Home