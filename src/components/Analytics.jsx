import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full py-16 px-4 bg-[#f2f2f2]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] rounded-full border-black border-2 mx-auto my-4' src={Laptop} alt="laptop" />
                <div className='flex flex-col justify-center px-4'>
                    <p className='text-[##00df9] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae voluptate error sed laudantium. Soluta dolor odit nesciunt cumque dignissimos et impedit obcaecati quidem. Minima magnam sunt modi veniam asperiores.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
