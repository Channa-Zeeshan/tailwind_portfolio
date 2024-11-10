import React from 'react'
import Image from 'next/image'
import mypic from  './pic2.jpg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black w-2/5 h-screen text-white flex flex-col justify-evenly items-center'>
        <div className='text-center items-center align-middle justify-center '>
            <Image src={mypic} alt='mypic'  className='rounded-full w-44'/>

           
        </div>
        <h1 className=' bold text-2xl'> Zeeshan Ali Channa</h1>

        <div className=' w-full'>

        <Link href="../Homepage">     <h1 className='p-4 border-y border-white w-full  text-center  hover:border-orange-500 hover:bg-gray-950'>  Home  </h1></Link>
        <Link href="../about">     <h1 className='p-4 border-b border-white w-full text-center  hover:border-orange-500 hover:bg-gray-950'>About  </h1></Link>
        <Link href="../contact">     <h1 className='p-4 border-b border-white w-full text-center hover:border-orange-500 hover:bg-gray-950'>Contact Me  </h1> </Link>
        </div>
        <div>

        </div>

    </div>
  )
}

export default Navbar