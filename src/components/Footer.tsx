import React from 'react'

function Footer() {
  return (
    <>
  <footer className='relative text-white text-xl'>
    <div className='absolute z-40 bottom-0 flex justify-between  w-full p-5'>

<p>© {new Date().getFullYear()} score calculator</p>
<ul className='flex gap-12 font-semibold'>

    <li className='hover:text-purple-400'>About Us</li>
    <li className='hover:text-purple-400'>Contact Us</li>
    <li className='hover:text-purple-400'>Privacy Policy</li>
</ul>
    </div>

    <div className='relative -z-50'>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,202.7C420,192,480,96,540,96C600,96,660,192,720,192C780,192,840,96,900,74.7C960,53,1020,107,1080,112C1140,117,1200,75,1260,58.7C1320,43,1380,53,1410,58.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

    </div>
    </footer>
    </>
  )
}

export default Footer