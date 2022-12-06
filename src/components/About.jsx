import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

    <div className='max-w-screen-lg mx-auto flex flex-col  justify-center w-full h-full p-4'>
      <div className='pb-8'>
        <p className='text-4xl font-bold border-b-4 inline border-gray-500 sm:pt-5 sm:text-1xl'>
          About
        </p>
      </div>     


      <p className='text-xl  sm:text-1px'>
        Welcome to the Random Phrase and Idiom Generator. There will be times when you may need more than a random word for what you want to accomplish, and this free online tool can help. The use of this tool is quite simple. All you need to do is indicate the number of random phrases you'd like to be displayed and then hit the "Generate Random Phrases" button. Once done, your chosen number of idioms will be displayed along with the meaning of the idiom.
      </p>

      <br />

      <p className='text-xl'>
        Using this tool can be excellent practice for students studying English as a second language because it gives the literal meaning of each phrase. This allows you to see the phrase and its meaning at the same time. While there are long idiom lists available online, trying to navigate through them on a single page can be daunting. Being able to create the exact number of random idioms which best suits your learning needs is a advantage this tool has over standard phrase list. In this way, this tool provides an excellent way for those learning English to practice their knowledge of English idioms and to learn new ones in the process.
      </p>
      </div>
    </div>
  )
}

export default About