import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/a-sandhya-rani-subudhi-a6890b16a',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/sandhyasubudhi',
    },
    {
      id: 3,
      child: (
        <>
          Email <MdOutlineMail size={30} />
        </>
      ),
      href: 'mailto:sandhyasubudhi26@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/a-sandhya-rani-subudhi-a6890b16a',
      style: 'rounded-br-md',
      download: true
    },

  ]

  return (
    // Position which defines the list
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          // The Four Lists
          <li key={id} className={'flex items-center w-40 h-12 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + style}>
            {/* Inside Content */}
            <a href={href} className='flex justify-between items-enter w-full text-white' download={download}
              target='_blank' rel="noreferrer">
              {child}
            </a>
          </li>
        ))}



        {/* hover:rounded-md means when we hover then border will get rounded to 6px */}

      </ul>
    </div>
  )
}

export default SocialLinks