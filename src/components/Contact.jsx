import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen p-4'>
        <div className='max-w-screen-lg mx-auto p-4 justify-center w-full h-full text-white flex flex-col'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
                <p className='pt-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/82eaf2cb-8ab9-4d33-bce0-b73fc2ec1096' method='post' className=' flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-1'/>
                    <input type='text' name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-1'/>
                    <textarea  name='message' 
                    rows='10'
                    placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500'>
                        Let's Talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact